import React from 'react';
import './Range.css';
import dining from '../../assets/dining.png';
import living from '../../assets/living.png';
import bedroom from '../../assets/bedroom.png';

const Range = () => (
    <div className="Range flex flex-col my-12">
        <h2 className="text-center font-bold text-3xl">Browse The Range</h2>
        <p className="text-center text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="mt-12 flex gap-6 justify-center">
            <div className="flex gap-4 flex-col">
                <div className='h-full'>
                    <img src={dining} className="h-full w-full rounded-xl" alt="dining" />
                </div>
                <p className="font-bold text-xl">Dining</p>
            </div>
            <div className="flex gap-4 flex-col">
                <div className='h-full'>
                    <img src={living} className="h-full w-full rounded-xl" alt="living" />
                </div>
                <p className="font-bold text-xl">Living</p>
            </div>
            <div className="flex gap-4 flex-col">
                <div className='h-full'>
                    <img src={bedroom} className="h-full w-full rounded-xl" alt="bedroom" />
                </div>
                <p className="font-bold text-xl">Bedroom</p>
            </div>
        </div>
    </div>
);

export default Range;
