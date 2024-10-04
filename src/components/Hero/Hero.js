import React from 'react';
import './Hero.css';

const Hero = () => (
    <div className="Hero h-dvh flex items-center justify-end">
        <div className="h-3/6 bg-accent-bg w-4/12 mr-32 px-8 pt-12 pb-8 flex flex-col justify-between items-start rounded-lg">
            <div className="flex flex-col items-start">

                <p className="font-bold tracking-widest">
                    New Arrival
                </p>
                <h2 className="text-5xl text-left font-bold text-primary">Discover Our <br />New Collection</h2>
                <p className="text-left font-semibold mt-2 p-1 pr-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <button className="bg-primary px-16 py-4 text-white font-semibold hover:underline underline-offset-4 "> BUY NOW </button>
        </div>
    </div>
);

export default Hero;
