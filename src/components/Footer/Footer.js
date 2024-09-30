import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="Footer border-t-gray-200 border-t-2 p-4 mt-4">
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between">
                <div className="flex flex-col w-4/12 items-start">
                    <p className="font-bold mb-12 text-2xl">Furniro.</p>
                    <p className="text-subtext text-sm text-left">400 University Drive Suite 200 Coral <br /> Gables, <br />
                        FL 33134 USA</p>
                </div>
                <div className="flex flex-col w-2/12 items-start">
                    <p className="text-subtext text-sm font-semibold mb-12">Links</p>
                    <ul className="p-0 items-start">
                        <li className="text-left mb-4"><Link to="/" className="text-black hover:underline font-semibold text-sm no-underline mb-4 text-left">Home</Link></li>
                        <li className="text-left mb-4"><Link to="/shop" className="text-black hover:underline font-semibold text-sm no-underline mb-4 text-left">Shop</Link></li>
                        <li className="text-left mb-4"><Link to="#" className="text-black hover:underline font-semibold text-sm no-underline mb-4 text-left">About</Link></li>
                        <li className="text-left mb-4"><Link to="/contact" className="text-black hover:underline font-semibold text-sm no-underline mb-4 text-left">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col w-2/12 items-start">
                    <p className="text-subtext text-sm font-semibold mb-12">Help</p>
                    <ul className="p-0 items-start">
                        <li className="text-left mb-4"><Link to="#" className="text-black hover:underline font-semibold text-sm no-underline mb-4 text-left">Payment Options</Link></li>
                        <li className="text-left mb-4"><Link to="#" className="text-black hover:underline font-semibold text-sm no-underline mb-4 text-left">Returns</Link></li>
                        <li className="text-left mb-4"><Link to="#" className="text-black hover:underline font-semibold text-sm no-underline mb-4 text-left">Privacy Policies</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col w-4/12 items-start">
                    <p className="text-subtext text-sm font-semibold mb-12">Newsletter</p>
                    <div className="flex">
                        <p className="underline-offset-4 text-subtext border-b-2 border-black mr-2">Enter Your Email Address &nbsp; &nbsp; &nbsp;</p>
                        <p className="font-semibold border-black border-b-2">SUBSCRIBE</p>
                    </div>

                </div>
            </div>
            <p className="text-left pt-4 border-t-gray-200 border-t-2">2023 furnio. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
