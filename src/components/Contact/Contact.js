import React from 'react';
import './Contact.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from "../../assets/logo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Features from '../Features/Features';

const Contact = () => (
    <div className="Contact">
        <div className="title-bg w-full h-fit py-24 flex flex-col items-center gap-4">
            <img src={logo} alt="logo" className="w-12" />
            <h1 className="text-4xl font-semibold">Contact</h1>
            <p>Home <ArrowForwardIosIcon fontSize='small' /> Contact</p>
        </div>
        <div className="my-20">
            <h2 className="text-3xl font-semibold">Get In Touch With Us</h2>
            <p className="mt-4 text-subtext w-1/2 mx-auto">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. <br />Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="flex justify-evenly gap-8 text-left px-60 mb-16">
            <div className="w-5/12 ">
                <div className="flex items-start gap-4 mb-8">
                    <LocationOnIcon />
                    <div>
                        <p className='text-xl font-semibold'>Address</p>
                        <p>236 5th SE Avenue, <br /> New York NY10000, <br /> United States</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 mb-8">
                    <PhoneIcon />
                    <div>
                        <p className='text-xl font-semibold'>Phone</p>
                        <p>Mobile: +(84) 546-6789</p>
                        <p>Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 mb-8">
                    <AccessTimeFilledIcon />
                    <div>
                        <p className='text-xl font-semibold'>Working Time</p>
                        <p>Monday-Friday: 9:00 - 22:00</p>
                        <p>Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <div className="w-7/12">
                <div className="mb-8">
                    <p className="font-semibold mb-4">Your name</p>
                    <input placeholder='John Doe' className="border-2 px-4 w-full rounded-xl py-6 border-subtext"></input>
                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Email address</p>
                    <input placeholder='johndoe@gmail.com' className="border-2 px-4 w-full rounded-xl py-6 border-subtext"></input>
                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Subject</p>
                    <input placeholder='This is an optional field' className="border-2 px-4 w-full rounded-xl py-6 border-subtext"></input>
                </div>
                <div className="mb-8">
                    <p className="font-semibold mb-4">Message</p>
                    <textarea placeholder="Hi I'd like to ask about" className="border-2 px-4 w-full text-start rounded-xl py-6 border-subtext"></textarea>
                </div>
                <button className="bg-primary text-white px-24 rounded-lg py-4">Submit</button>
            </div>
        </div>
        <Features />
    </div>
);


export default Contact;
