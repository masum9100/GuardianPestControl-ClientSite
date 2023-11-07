import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiTwotoneMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { AuthContext } from '../Hook/AuthProvider';

const OneServiceDetails = () => {

    const {user} = useContext(AuthContext)

    const service = useLoaderData()

    const { name, short_description, details1, details2, details3, image1, image2, image3, price, service_provider_name, service_provider_image, service_provider_email } = service

    const heroStyle = {
        backgroundImage: `url(${image2})`,
    };

    const handleBook = event =>{
        event.preventDefault()

        const form = event.target 
        const serviceName =form.service_name.value
        const userEmail = form.user_email.value
        const price = form.price.value
        const serviceProEmail = form.service_pro_email.value
        const date = form.date.value
        const location = form.location.value
        const booking = {
            serviceName,
            userEmail,
            price,
            serviceProEmail,
            date,
            location
        }
        console.log(booking)
        fetch('http://localhost:5001/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
        .then(res => res.json())
        .then (data => {
            console.log(data)
        })
    }



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
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="bg-[#55AA39] text-white font-extrabold rounded-full py-3 w-1/2  my-5" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-[#55AA39]">Hello!</h3>
                        <form onSubmit={handleBook}>
                            <img src={image1} alt="" className='w-28 h-28 mx-auto' />
                            <div className='flex justify-between gap-2'>
                                <div className='w-1/2 py-2'>
                                    <p className='text-left py-1'>Service Name</p>

                                    <input className='border-2 border-green-600 p-2 w-full' type="text" id="" name="service_name" value={name} readonly></input>
                                </div>
                                <div className='w-1/2 py-2'>
                                    <p className='text-left py-1'>Service Price (USD)</p>
                                    <input className='border-2 border-green-600 p-2 w-full' type="text" id="" name="price" value={'$'+price} readonly></input>
                                </div>
                            </div>
                            <div className='flex justify-between gap-2'>
                                <div className='w-1/2 py-2'>
                                    <p className='text-left py-1'>Your Email</p>
                                    <input className='border-2 border-green-600 p-2 w-full' type="text" id="" name="user_email" value={user?.email} readonly></input>
                                </div>
                                <div className='w-1/2 py-2'>
                                    <p className='text-left py-1'>Service Provider Email</p>
                                    <input className='border-2 border-green-600 p-2 w-full' type="text" id="" name="service_pro_email" value={service_provider_email} readonly></input>
                                </div>
                            </div>
                            <div className='flex justify-between gap-2'>
                                <div className='w-1/2 py-2'>
                                    <p className='text-left py-1'>Service Taking Date</p>
                                    <input type="date" name="date" id="" className='border-2 border-green-600 p-2 w-full' />
                                </div>
                                <div className='w-1/2 py-2'>
                                    <p className='text-left py-1'>Your Address</p>
                                    <input type="text" name="location" id="" placeholder='your location' className='border-2 border-green-600 p-2 w-full' />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="CONFIRM" className="bg-[#55AA39] text-white font-bold rounded-full py-3 w-1/2  my-5" />

                            </div>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-error">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default OneServiceDetails;