import React from 'react';
import './Cart.css';
import logo from "../../assets/logo.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Features from '../Features/Features';

const Cart = () => (
    <div className="Cart">
        <div className="title-bg w-full h-fit py-24 flex flex-col items-center gap-4">
            <img src={logo} alt="logo" className="w-12" />
            <h1 className="text-4xl font-semibold">Cart</h1>
            <p>Home <ArrowForwardIosIcon fontSize='small' /> Cart</p>
        </div>
        <Features />
    </div>
);

export default Cart;
