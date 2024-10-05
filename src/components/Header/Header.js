import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import logoWithText from './../../assets/logo-with-text.png'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import cart1 from '../../assets/cart1.png';
import cart2 from '../../assets/cart2.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="Header flex justify-between mx-20 py-6 items-center">
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
                    {/* <li><Link to="/cart" className="text-black no-underline"><ShoppingCartIcon /></Link></li> */}
                    <li><button onClick={toggleOverlay} className="text-black no-underline"><ShoppingCartIcon /></button></li>
                </ul>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={toggleOverlay}
                ></div>
            )}
            <div className={`fixed top-0 right-0 h-full w-96 bg-white z-20 transform transition-transform duration-300 flex flex-col justify-between ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex gap-2 justify-between items-start">
                            <h2 className="text-2xl font-bold border-b-2 pb-6 w-9/12 text-left">Shopping Cart</h2>
                            <button onClick={toggleOverlay} className="text-white rounded-lg w-3/12 text-right pt-1">
                                <CancelPresentationIcon className="text-subtext" />
                            </button>
                        </div>
                        <div className="flex items-center justify-between mt-12 text-left">
                            <div className='flex gap-4 items-center'>
                                <img src={cart1} />
                                <div>
                                    <p className="font-semibold text-lg">Asgaard sofa</p>
                                    <p>1 X <span className="text-sm text-primary font-semibold">Rs. 250,000.00</span></p>
                                </div>
                            </div>
                            <button><CancelIcon className="text-subtext" /></button>
                        </div>
                        <div className="flex items-center justify-between mt-6 text-left">
                            <div className='flex gap-4 items-center'>
                                <img src={cart2} />
                                <div>
                                    <p className="font-semibold text-lg">Casaliving Wood</p>
                                    <p>1 X <span className="text-sm text-primary font-semibold">Rs. 270,000.00</span></p>
                                </div>
                            </div>
                            <button><CancelIcon className="text-subtext" /></button>
                        </div>
                    </div>
                </div>

                <div>

                    <div className="flex flex-col p-6">
                        <div className='flex text-left'>
                            <p className="w-1/2 text-lg">Subtotal</p>
                            <p className="w-1/2 text-lg font-bold text-primary">Rs. 520,000.00</p>
                        </div>
                    </div>
                    <div className="border-t-2 flex justify-evenly items-center py-6">
                        <Link to="/cart"><button className="border-2 rounded-full px-6 border-black py-1 hover:bg-black hover:text-white">Cart</button></Link>
                        <Link to="/checkout"><button className="border-2 rounded-full px-6 border-black py-1 hover:bg-black hover:text-white">Checkout</button></Link>
                        <button className="border-2 rounded-full px-6 border-black py-1 hover:bg-black hover:text-white">Comparison</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
