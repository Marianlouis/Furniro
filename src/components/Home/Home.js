import React from 'react';
import './Home.css';
import hero from "./../../assets/hero.png"

const Home = () => (
    <div className="Home">
        <img src={hero} alt="Hero" className="w-full h-dvh" />
    </div>
);

export default Home;
