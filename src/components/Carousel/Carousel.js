import React from 'react';
import './Carousel.css';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/carousel3.png';
import EastIcon from '@mui/icons-material/East';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Carousel = () => (
    <div className="Carousel flex gap-4 justify-center items-center px-20 py-8 text-left bg-accent-bg">
        <div className="w-1/3">
            <h2 className="font-bold text-4xl">50+ Beautiful rooms <br /> inspiration </h2>
            <p className="text-wrap text-slate-700 py-4">Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you</p>
            <button className="bg-primary font-bold px-6 py-2 hover:underline underline-offset-2 text-white">Explore More</button>
        </div>
        <div className="w-1/3 relative">
            <img src={carousel1} alt="" className='w-full h-full' />
            <div className="absolute bottom-8 left-8">
                <div className="flex justify-start items-end">
                    <div className="flex flex-col p-6 gap-2 bg-opacity-70 bg-white">
                        <p>01 - Bedroom</p>
                        <p className='text-3xl font-bold '>Inner Peace</p>
                    </div>
                    <button className="bg-primary p-2 text-white hover:text-primary hover:bg-white border-primary border-4">
                        <EastIcon />
                    </button>
                </div>
            </div>
        </div>
        <div className="w-1/3">
            <div className="flex flex-col justify-start">
                <div className="carousel-imgs relative ">
                    <button className='absolute left-4 text-primary bg-white p-2 rounded-full top-1/2 translate-y-1/2'><ChevronLeftIcon /></button>
                    <img src={carousel2} className='w-full h-full' />
                    <button className='absolute right-4 text-primary bg-white p-2 rounded-full top-1/2 translate-y-1/2'><ChevronRightIcon /></button>

                </div>
                <div className='carousel-indicators flex justify-start gap-4 my-6'>
                    <button className="bg-gray-400 rounded-full w-2 h-2"></button>
                    <button className="bg-gray-400 rounded-full w-2 h-2"></button>
                    <button className="bg-gray-400 rounded-full w-2 h-2"></button>
                    <button className="bg-gray-400 rounded-full w-2 h-2"></button>
                </div>
            </div>
        </div>
    </div>
);

export default Carousel;
