import React from 'react';
import './Cart.css';
import logo from "../../assets/logo.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Features from '../Features/Features';
import asgaard from "../../assets/asgaard-sofa.png"
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => (
    <div className="Cart">
        <div className="title-bg w-full h-fit py-24 flex flex-col items-center gap-4">
            <img src={logo} alt="logo" className="w-12" />
            <h1 className="text-4xl font-semibold">Cart</h1>
            <p>Home <ArrowForwardIosIcon fontSize='small' /> Cart</p>
        </div>
        <div className="flex gap-8 w-10/12 mx-auto my-16">
            <div className="w-8/12">
                <table className="w-full p-16">
                    <thead className="bg-accent-bg mb-16">
                        <tr>
                            <th></th>
                            <th className="p-4 font-semibold">Product</th>
                            <th className="p-4 font-semibold">Price</th>
                            <th className="p-4 font-semibold">Quantity</th>
                            <th className="p-4 font-semibold">Subtotal</th>
                            <th className="p-4 font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="pt-12"><img src={asgaard} className="" /></td>
                            <td className="text-subtext pt-12">Asgaard Sofa</td>
                            <td className="text-subtext pt-12">Rs. 250,000.00</td>
                            <td className="pt-12"><span className="py-1 px-3 border-slate-400 border-2 w-fit h-fit rounded">1</span></td>
                            <td className="font-semibold pt-12">Rs. 250,000.00</td>
                            <td className="pt-10"><DeleteIcon className="text-primary hover:cursor-pointer" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col w-4/12 bg-accent-bg py-4 px-24">
                <p className="font-bold text-3xl mb-12">Cart Totals</p>
                <div className='flex justify-between mb-6'>
                    <p className="font-semibold">Subtotal</p>
                    <p className="text-subtext">Rs. 250,000.00</p>
                </div>
                <div className='flex justify-between mb-10'>
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold text-lg text-primary">Rs. 250,000.00</p>
                </div>
                <button className="px-8 py-3 hover:bg-primary hover:text-white hover:border-white mb-16 border-2 text-xl rounded-xl border-black">Check Out</button>
            </div>
        </div>
        <Features />
    </div>
);

export default Cart;
