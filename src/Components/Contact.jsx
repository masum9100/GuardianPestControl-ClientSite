import React, { useRef, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly", "bounce"]
import MovingText from 'react-moving-text'

const Contact = () => {
    const form = useRef();
    const [animationIndex, setAnimationIndex] = useState(0)
    const [animationType, setAnimationType] = useState(AnimationsForChaining[0])

    const handleChainAnimation = () => {
        setCounter(animationIndex + 1)
        setAnimationType(selectedItems[animationIndex + 1])
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l1lszv5', 'template_wkiaozd', form.current, 'F2J_LmosuCBHU4xae')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thanks For Your Message",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);

            });
    };
    return (
        <div className='max-w-screen-xl mx-auto grid md:flex gap-2'>
            <div className='w-full md:w-1/2 p-5'>
            <MovingText
                        onAnimationEnd={handleChainAnimation}
                        type="bounce"
                        duration="5000ms"
                        timing="linear"
                        iteration={1}>
                        <p className='text-3xl text-[#55A839] font-bold mb-16'>Request a quote</p>
                    </MovingText>
                
                <form ref={form} onSubmit={sendEmail}>
                    <div className='flex mb-10 text-xl'>
                        <input type="text" name='user_name' placeholder='First Name' className='w-1/2 border-b-2 border-green-600 mr-4' />
                        <input type="text" placeholder='Last Name' className='w-1/2 border-b-2 border-green-600' />
                    </div>
                    <div className='flex mb-10 text-xl'>
                        <input type="text" placeholder='Phone Number' className='w-1/2 border-b-2 border-green-600 mr-4' />
                        <input type="text" name='user_email' placeholder='Email' className='w-1/2 border-b-2 border-green-600' />
                    </div>
                    <div className='grid'>
                        <input type="text" name="" id="" placeholder='Full Address' className='border-b-2 border-green-600 mb-10 text-xl' />
                        <input type="text" name="message" id="" placeholder='Short Description of Problem Experienced' className='border-b-2 border-green-600 text-xl' />
                    </div>
                    <input type="submit" value="SENT REQUEST" className='px-3 py-2 rounded-full font-bold bg-[#55AA39] text-white mt-16' />
                </form>




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