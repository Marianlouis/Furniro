import React from 'react';
import './Carousel.css';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/living.png';
import carousel4 from '../../assets/bedroom.png'
import carousel5 from '../../assets/dining.png'
import EastIcon from '@mui/icons-material/East';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

function Carousel() {
    const [photoIdx, setPhotoIdx] = useState(0);
    const photos = [carousel1, carousel2, carousel3, carousel4, carousel5];

    function handleLeftCarousel() {
        setPhotoIdx(photoIdx - 1);
        if (photoIdx < 0) {
            setPhotoIdx(photos.length - 2);
        }
    }
    function handleRightCarousel() {
        setPhotoIdx(photoIdx + 1);
        if (photoIdx >= photos.length - 2) {
            setPhotoIdx(0);
        }
    }
    return (
        <div className="Carousel flex gap-4 justify-center items-center px-20 py-8 text-left bg-accent-bg h-dvh">
            <div className="w-1/3">
                <h2 className="font-bold text-4xl">50+ Beautiful rooms <br /> inspiration </h2>
                <p className="text-wrap text-slate-700 py-4">Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you</p>
                <button className="bg-primary font-bold px-6 py-2 hover:underline underline-offset-2 text-white">Explore More</button>
            </div>
            <div className="w-1/3 relative object-fill h-full">
                <div className="h-full">
                    <img src={photos[photoIdx]} alt="" className='w-full h-full object-cover' />
                </div>
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
            <div className="w-1/3 h-full">
                <div className="flex flex-col justify-start">
                    <div className="carousel-imgs relative h-full">
                        {/* <button onClick={handleLeftCarousel} className='hover:bg-primary hover:text-white absolute left-4 text-primary bg-white p-2 rounded-full top-1/2 translate-y-1/2'><ChevronLeftIcon /></button> */}
                        <img src={photos[photoIdx + 1]} className='w-full h-full object-cover' />
                        <button onClick={handleRightCarousel} className='hover:bg-primary hover:text-white absolute right-4 text-primary bg-white p-2 rounded-full top-1/2 translate-y-1/2'><ChevronRightIcon /></button>

                    </div>
                    <div className='carousel-indicators flex justify-start gap-4 my-6 items-center'>
                        <button className={`rounded-full w-2 h-2 ${photoIdx === 0 ? 'bg-primary border-4 p-1 border-accent-bg outline outline-primary' : 'bg-gray-400'}`}></button>
                        <button className={`rounded-full w-2 h-2 ${photoIdx === 1 ? 'bg-primary border-4 p-1 border-accent-bg outline outline-primary' : 'bg-gray-400'}`}></button>
                        <button className={`rounded-full w-2 h-2 ${photoIdx === 2 ? 'bg-primary border-4 p-1 border-accent-bg outline outline-primary' : 'bg-gray-400'}`}></button>
                        <button className={`rounded-full w-2 h-2 ${photoIdx === 3 ? 'bg-primary border-4 p-1 border-accent-bg outline outline-primary' : 'bg-gray-400'}`}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
