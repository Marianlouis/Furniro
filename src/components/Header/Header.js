import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => (
    <header className="Header d-flex justify-content-around">
        <div>
            <p>Furniro</p>
        </div>
        <div>
            <nav>
                <ul className="flex justify-around gap-8">
                    <li><Link to="/" className="text-black no-underline">Home</Link></li>
                    <li><Link to="/shop" className="text-black no-underline">Shop</Link></li>
                    <li><Link to="#" className="text-black no-underline">About</Link></li>
                    <li><Link to="/contact" className="text-black no-underline">Contact</Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <ul className="flex justify-around gap-4">
                <li><Link to="#" className="text-black no-underline"><PersonIcon /></Link></li>
                <li><Link to="#" className="text-black no-underline"><SearchIcon /></Link></li>
                <li><Link to="#" className="text-black no-underline"><FavoriteBorderIcon /></Link></li>
                <li><Link to="/cart" className="text-black no-underline"><ShoppingCartIcon /></Link></li>
            </ul>
        </div>
    </header>
);

export default Header;
