import React from 'react';
import './Home.css';
import Hero from "../Hero/Hero";
import Range from '../Range/Range';
import Products from "../Products/Products";
import Carousel from "../Carousel/Carousel";
import Furniture from "../Furniture/Furniture";

const Home = () => (
    <div className="Home flex flex-col">
        <Hero />
        <Range />
        <Products />
        <Carousel />
        <Furniture />
    </div>
);

export default Home;
