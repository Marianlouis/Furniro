import React from 'react';
import './Products.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShareIcon from '@mui/icons-material/Share';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Products() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(8);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    function handleShowMore() {
        setProductCount(productCount + 4);
    }

    return (
        <div className="Products flex flex-col my-6">
            <h2 className="text-center font-bold text-3xl">Our Products</h2>
            <div className="mt-12 grid grid-cols-4 gap-6 justify-center px-12">
                {products.slice(0, productCount).map((product) => (
                    <div className="group grid grid-cols-1 gap-4 border relative" key={product.id}>
                        <div className="col-span-1 w-full aspect-square relative">
                            <img src={product.image} className="h-full w-full object-contain rounded-xl" alt={product.title} />
                            <div className="absolute top-4 right-4 bg-teal-400 w-fit aspect-square rounded-full text-white p-2 flex items-center">
                                <p>New</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 text-left p-4 pb-8">
                            <p className="text-slate-700 font-bold text-xl col-span-1">{product.title.split(" ").slice(0, 2).join(" ")}</p>
                            <p className="font-semibold text-base text-subtext col-span-1">{product.category}</p>
                            <p className="text-slate-700 font-bold text-lg text-left col-span-1">${product.price.toFixed(2)}</p>
                        </div>
                        <div className="w-full h-full top-0 left-0 absolute hidden group-hover:flex flex-col justify-center items-center gap-4 bg-opacity-50 bg-black">
                            <button className='hover:bg-primary hover:text-white bg-white font-bold text-lg px-16 py-4 text-primary w-fit mx-auto'>Add to Cart</button>
                            <div className="flex gap-2 text-lg text-white font-bold justify-between w-full px-6">
                                <button className="gap-1 flex items-center justify-center"><ShareIcon />Share</button>
                                <button className="gap-1 flex items-center justify-center"><CompareArrowsIcon />Compare</button>
                                <button className="gap-1 flex items-center justify-center"><FavoriteBorderIcon />Like</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
            <div className='flex w-full'>
                <div className="w-full mx-auto mt-8">
                    {productCount < products.length ? <>
                        <button onClick={handleShowMore} className="border-2 hover:bg-primary px-20 py-2 hover:text-white border-primary font-bold text-lg text-primary text-center">
                            Show More</button>
                    </>
                        : <>
                        </>}
                </div>
            </div>
        </div >

    );
}

export default Products;
