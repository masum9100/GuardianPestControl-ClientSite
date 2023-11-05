import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='max-w-screen-xl mx-auto grid md:flex gap-2'>
            <div className='w-full md:w-1/2 p-5'>
                <p className='text-3xl text-[#55A839] font-bold mb-16'>Request a quote</p>
                <div className='flex mb-10 text-xl'>
                    <input type="text" placeholder='First Name' className='w-1/2 border-b-2 border-green-600 mr-4' />
                    <input type="text" placeholder='Last Name' className='w-1/2 border-b-2 border-green-600' />
                </div>
                <div className='flex mb-10 text-xl'>
                    <input type="text" placeholder='Phone Number' className='w-1/2 border-b-2 border-green-600 mr-4' />
                    <input type="text" placeholder='Email' className='w-1/2 border-b-2 border-green-600' />
                </div>
                <div className='grid'>
                    <input type="text" name="" id="" placeholder='Full Address' className='border-b-2 border-green-600 mb-10 text-xl' />
                    <input type="text" name="" id="" placeholder='Short Description of Problem Experienced' className='border-b-2 border-green-600 text-xl' />
                </div>
                <button className='px-3 py-2 rounded-full font-bold bg-[#55AA39] text-white mt-16'>SENT REQUEST</button>
            </div>
            <div className='w-full md:w-1/2 bg-[#333333] p-5'>
                <p className='text-3xl text-white font-bold mb-10'>Contact Details</p>
                <p className='text-md text-white'>1.Provide your contact information and a short description of the problem you’re experiencing.</p>
                <p className='text-md text-white my-1'>2. One of our representatives will be notified and will prepare your quote. Additional answer may be necessary in order to accurately quote your project. </p>
                <p className='text-md text-white'>3. We will dispatch a technician to your job right away</p>
                <div className='flex gap-2 my-4'>
                    <div className='pt-3 text-[#55A839]'>
                        <FaLocationDot></FaLocationDot>
                    </div>
                    <div>
                        <p className='text-[#55A839] text-xl'>Address</p>
                        <p className='text-md text-white'>14629 SW 104 Street #239 <br />Miami Florida 33186</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='pt-3 text-[#55A839]'>
                        <FaRegClock></FaRegClock>
                    </div>
                    <div>
                        <p className='text-[#55A839] text-xl'>Office hours</p>
                        <p className='text-md text-white'>Mon - Fri 9AM to 5 PM <br />Closed on Saturday</p>
                    </div>
                </div>
                <div className='flex gap-2 my-4'>
                    <div className='pt-3 text-[#55A839]'>
                        <FaPhone></FaPhone>
                    </div>
                    <div>
                        <p className='text-[#55A839] text-xl'>Address</p>
                        <p className='text-md text-white'>Call us at (786) 462-5912</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;