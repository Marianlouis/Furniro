import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import logoWithText from './../../assets/logo-with-text.png'

const Header = () => (
    <header className="Header d-flex justify-content-around p-4 items-center">
        <div>
            <Link to="/" className="text-black no-underline font-semibold">
                <img src={logoWithText} width={150} />
            </Link>
        </div>
        <div>
            <nav>
                <ul className="flex justify-around gap-8">
                    <li><Link to="/" className="text-black no-underline font-semibold">Home</Link></li>
                    <li><Link to="/shop" className="text-black no-underline font-semibold">Shop</Link></li>
                    <li><Link to="#" className="text-black no-underline font-semibold">About</Link></li>
                    <li><Link to="/contact" className="text-black no-underline font-semibold">Contact</Link></li>
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
