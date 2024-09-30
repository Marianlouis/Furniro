import React from 'react';
import './Features.css';
import trophy from '../../assets/trophy.png';
import warranty from '../../assets/warranty.png';
import shipping from '../../assets/shipping.png';
import customer from '../../assets/customer-support.png';

const Features = () => (
    <div className="Features bg-accent-bg w-full flex justify-evenly py-16">
        <div className="flex align-center gap-2">
            <img src={trophy} className="w-12 h-12" alt="trophy" />
            <div className="flex flex-col">
                <p className="text-lg text-left font-semibold">High Quality</p>
                <p className="text-subtext text-left font-semibold">Crafted from top materials</p>
            </div>
        </div>
        <div className="flex align-center gap-2">
            <img src={warranty} className="w-12 h-12" alt="trophy" />
            <div className="flex flex-col">
                <p className="text-lg text-left font-semibold">Warranty Protection</p>
                <p className="text-subtext text-left font-semibold">Over 2 years</p>
            </div>
        </div>
        <div className="flex align-center gap-2">
            <img src={shipping} className="w-12 h-12" alt="trophy" />
            <div className="flex flex-col">
                <p className="text-lg text-left font-semibold">Free Shipping</p>
                <p className="text-subtext text-left font-semibold">Order over $150</p>
            </div>
        </div>
        <div className="flex align-center gap-2">
            <img src={customer} className="w-12 h-12" alt="trophy" />
            <div className="flex flex-col">
                <p className="text-lg text-left font-semibold">24/7 Support</p>
                <p className="text-subtext text-left font-semibold">Dedicated support</p>
            </div>
        </div>
    </div>
);

export default Features;
