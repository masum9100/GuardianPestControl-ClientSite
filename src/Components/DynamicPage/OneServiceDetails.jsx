import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiTwotoneMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const OneServiceDetails = () => {

    const service = useLoaderData()

    const { name, short_description, details1, details2, details3, image2, image3, price, service_provider_name, service_provider_image, service_provider_email } = service

    const heroStyle = {
        backgroundImage: `url(${image2})`,
    };

    return (
        <div className='max-w-screen-xl mx-auto mt-10'>
            <div className="hero " style={heroStyle}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-10">
                        <h1 className="mb-5 text-5xl font-bold text-[#55AA39]">{name}</h1>
                        <p className="mb-5">{short_description}</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:flex justify-between items-center my-5 gap-10 px-1 md:px-3 lg:px-10'>
                <div className='lg:px-20'>
                    <p>{details1}</p>
                    <p className='my-5'>{details2}</p>
                    <p>{details3}</p>
                    <div className='border-2 border-green-600 md:w-1/2 mt-5 mx-auto rounded-lg'>
                        <p className='text-center font-bold mt-1'>Service Provider</p>
                        <div className='bg-[#55AA39] h-1 w-1/2 mx-auto my-1'></div>
                        <img src={service_provider_image} alt="" className='w-16 h-16 rounded-full mx-auto' />
                        <p className='text-center font-semibold my-1'>{service_provider_name}</p>
                        <div className='flex justify-between px-1'>
                            <div className='flex justify-center items-center'>
                                <AiTwotoneMail className='text-[#55AA39]'></AiTwotoneMail>
                                <p>{service_provider_email}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaLocationDot className='text-[#55AA39]'></FaLocationDot>
                                <p>Khulna, Bangladesh</p>
                            </div>
                        </div>
                        <p className='text-white font-medium bg-[#55AA39] text-center py-1 mt-1'>Price: ${price}</p>

                    </div>
                </div>
                <div className='lg:pr-20 mx-auto'>
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className='max-w-screen-xl text-center'>
            <button className='bg-[#55AA39] text-white font-extrabold rounded-full py-3 w-1/2  my-5'>Book Now</button>
            </div>
        </div>
    );
};

export default OneServiceDetails;