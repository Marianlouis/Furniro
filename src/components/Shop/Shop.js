import React from 'react';
import './Shop.css';
import logo from "../../assets/logo.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShareIcon from '@mui/icons-material/Share';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import Features from '../Features/Features';
import { Link } from 'react-router-dom';

function Shop() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch(error => console.error(error));
        console.log(products)
    }, []);

    return (
        <div className="Shop">
            <div className="title-bg w-full h-fit py-24 flex flex-col items-center gap-4">
                <h1 className="text-6xl font-semibold">Shop</h1>
                <p> <span className="font-bold">Home <ArrowForwardIosIcon fontSize='small' /></span> Shop</p>
            </div>
            <div className="bg-accent-bg w-full h-20 flex justify-between px-24 items-center font-semibold">
                <div className="flex gap-4 items-center">
                    <TuneIcon />
                    <p> Filter </p>
                    <DragIndicatorIcon />
                    <CropLandscapeIcon />
                    <div className="w-0.5 h-6 bg-slate-500"></div>
                    <p>Showing {(page - 1) * 8 + 1}-{Math.min((page) * 8, 20)} of 20 results</p>
                </div>
                <div className="flex gap-4 items-center">
                    <p>Show</p>
                    <p className="bg-white text-subtext py-2 px-3">8</p>
                    <p>Sort by</p>
                    <p className="bg-white text-subtext py-2 pl-6 pr-12">Default</p>
                </div>
            </div>
            <div className="my-12 grid grid-cols-4 gap-6 justify-center px-12">
                {products.slice((page - 1) * 8, (page) * 8).map((product) => (
                    <Link to={`/product/${product.id}`} className="group grid grid-cols-1 gap-4 border relative" key={product.id}>
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
                    </Link>
                ))
                }
            </div >
            <div className="flex mb-12 justify-center items-center gap-4">
                <button onClick={() => setPage(1)} className={`${page === 1 ? 'bg-primary text-white' : 'bg-accent-bg text-black'} rounded-lg bg-accent-bg px-4 py-2`}> 1 </button>
                <button onClick={() => setPage(2)} className={`${page === 2 ? 'bg-primary text-white' : 'bg-accent-bg text-black'} rounded-lg bg-accent-bg px-4 py-2`}> 2 </button>
                <button onClick={() => setPage(3)} className={`${page === 3 ? 'bg-primary text-white' : 'bg-accent-bg text-black'} rounded-lg bg-accent-bg px-4 py-2`}> 3 </button>
            </div>
            <Features />
        </div>
    );
}

export default Shop;
