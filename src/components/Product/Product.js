import React from 'react';
import './Product.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import side from '../../assets/side.png'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const rating = product?.rating?.rate ? Math.round(product.rating.rate * 2) / 2 : 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 === 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => { setProduct(response.data); console.log(response.data) })
            .catch(error => console.error(error));
    }, []);
    return (
        <div className="Product text-left">
            <div className="bg-accent-bg py-8 px-20 flex gap-4 items-center">
                <p className='text-subtext'>Home</p>
                <ChevronRightIcon />
                <p className="text-subtext">Shop</p>
                <ChevronRightIcon />
                <div className="w-0.5 h-8 bg-slate-400"></div>
                <p className='font-semibold'>{product.title}</p>
            </div>
            <div className="flex gap-20 px-24 py-8">
                <div className="bg-white w-1/2 flex gap-10">
                    <div className='1/5'>
                        <img src={side} />
                    </div>
                    <div className='w-4/5 border-4 border-accent-bg rounded-lg h-fit bg-accent-bg'>
                        <img src={product.image} />
                    </div>
                </div>
                <div className="bg-white w-1/2 flex flex-col">
                    <h2 className="text-4xl font-semibold ">{product.title}</h2>
                    <p className="text-subtext text-2xl my-2 font-semibold">${product.price}</p>
                    <div className="flex items-center my-4 gap-4">
                        <div>
                            {[...Array(fullStars)].map((_, index) => (
                                <StarIcon key={index} className="text-yellow-500" />
                            ))}
                            {hasHalfStar && <StarHalfIcon className="text-yellow-500" />}
                            {[...Array(emptyStars)].map((_, index) => (
                                <StarOutlineIcon key={index} className="text-yellow-500" />
                            ))}
                        </div>
                        <div className="w-0.5 h-8 bg-slate-400"></div>
                        <p className="text-subtext"> {product?.rating?.count} Customer Reviews </p>
                    </div>
                    <p>{product.description}</p>
                    <p className="mt-6 mb-4 text-subtext">Size</p>
                    <div className="flex gap-4">
                        <button className="bg-primary text-white px-4 text-sm py-2 rounded w-fit"> L </button>
                        <button className="bg-accent-bg px-4 text-sm py-2 rounded w-fit"> XL </button>
                        <button className="bg-accent-bg px-4 text-sm py-2 rounded w-fit"> XS </button>
                    </div>
                    <p className="mt-6 mb-4 text-subtext">Color</p>
                    <div className="flex gap-4">
                        <button className="bg-violet-500 text-white p-4 w-2 h-2 aspect-square rounded-full">  </button>
                        <button className="bg-black p-4 w-2 h-2 aspect-square rounded-full">  </button>
                        <button className="bg-primary p-4 w-2 h-2 aspect-square rounded-full">  </button>
                    </div>
                    <div className="flex gap-4 mt-8 justify-between border-b-2 pb-16">
                        <div className='rounded-xl border-2 font-semibold flex justify-between items-center w-2/12 p-4'>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <button className="w-5/12 border-2 hover:bg-black hover:text-white text-black border-black rounded-xl  text-2xl">Add to Cart</button>
                        <button className="w-5/12 border-2 hover:bg-black hover:text-white text-black border-black rounded-xl  text-2xl">+ Compare</button>
                    </div>
                    <div className="flex text-subtext gap-4 mt-12">
                        <div className="flex flex-col gap-2">
                            <p>SKU</p>
                            <p>Category</p>
                            <p>Tags</p>
                            <p>Sare</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>: &nbsp;SS001</p>
                            <p>: &nbsp;{product.category}</p>
                            <p>: &nbsp;Sofa, Chair, Home, Shop</p>
                            <div className="flex">: &nbsp;<span className="flex gap-4"> <FacebookIcon className="text-black" /> <LinkedInIcon className="text-black" /> <TwitterIcon className="text-black" /></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
