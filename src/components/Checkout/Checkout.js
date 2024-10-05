import React from 'react';
import './Checkout.css';
import logo from "../../assets/logo.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Features from '../Features/Features';

const Checkout = () => (
    <div className="Checkout">
        <div className="title-bg w-full h-fit py-24 flex flex-col items-center gap-4">
            <img src={logo} alt="logo" className="w-12" />
            <h1 className="text-4xl font-semibold">Checkout</h1>
            <p>Home <ArrowForwardIosIcon fontSize='small' /> Checkout</p>
        </div>
        <div className="flex justify-evenly gap-40 text-left px-40 my-20 ">
            <div className="w-5/12 ">
                <h2 className="font-bold text-4xl mb-8"> Billing Details </h2>
                <div className="flex gap-4">
                    <div className="mb-8 w-1/2">
                        <p className="font-semibold mb-4">First Name</p>
                        <input placeholder='John' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                    </div>
                    <div className="mb-8 w-1/2">
                        <p className="font-semibold mb-4">Last Name</p>
                        <input placeholder='Doe' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                    </div>
                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Company Name (Optional)</p>
                    <input placeholder='Facebook' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Country / Region</p>
                    <select className="border-2 w-full rounded-xl p-4 border-subtext" defaultValue="">
                        <option value="" disabled>Select a Country / Region</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Yemen">Yemen</option>
                    </select>                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Street Address</p>
                    <input placeholder='Shubra St.' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                </div>

                <div className="mb-8">
                    <p className="font-semibold mb-4">Town / City</p>
                    <input placeholder='Cairo' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                </div>

                <div className="mb-8">
                    <p className="font-semibold mb-4">ZIP Code</p>
                    <input placeholder='12583' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Phone</p>
                    <input placeholder='123480102348' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                </div>

                <div className="mb-8">
                    <p className="font-semibold mb-4">Email Address</p>
                    <input placeholder='johndoe@gmail.com' className="border-2 w-full rounded-xl p-4 border-subtext"></input>
                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Additional Information</p>
                    <textarea className="border-2 px-4 w-full text-start rounded-xl py-6 border-subtext"></textarea>
                </div>
            </div>
            <div className="w-7/12 flex flex-col">
                <div className="mt-12">
                    <div className="flex justify-between mb-6">
                        <p className="font-semibold text-3xl">Product</p>
                        <p className="font-semibold text-3xl">Subtotal</p>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="text-subtext text-xl">Asgaard sofa <span className='text-black'> x 1</span></p>
                        <p className="text-lg">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="text-xl font-medium">Subtotal</p>
                        <p className="text-lg">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between mb-8 border-b-2 pb-8">
                        <p className="text-xl font-medium">Total</p>
                        <p className="text-3xl text-primary font-bold">Rs. 250,000.00</p>
                    </div>
                </div>

                <div className="">
                    <div className="mb-6">
                        <label className="flex items-center mb-4">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="bankTransfer"
                                className="mr-2"
                            />
                            <span className="font-semibold text-xl">Direct Bank Transfer</span>
                        </label>
                        <p className="text-subtext text-lg">
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have cleared in our account.
                        </p>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center mb-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                className="mr-2"
                            />
                            <span className="font-semibold text-xl">Cash on Delivery</span>
                        </label>
                    </div>

                    <div className="mb-6">
                        <p className="text-lg">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account,
                            and for other purposes described in our <span className="font-semibold">privacy policy</span>.
                        </p>
                    </div>
                    <div className="flex">

                        <button className="hover:bg-black hover:text-white border-2 border-black py-3 px-8 rounded-xl w-1/2 mx-auto text-center text-xl ">
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Features />
    </div>
);

export default Checkout;
