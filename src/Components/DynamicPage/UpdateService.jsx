import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateService = () => {

    const updateService = useLoaderData()
    const { _id, serviceName, price, userName, user_email, photo_url, description, location } = updateService

    const handleUpdateService = event =>{
        event.preventDefault()
        const form = event.target
        const serviceName = form.serviceName.value
        const price = form.price.value
        const userName = form.user_name.value
        const user_email = form.user_email.value
        const photo_url = form.photo_url.value
        const description = form.description.value
        const location = form.location.value
        
        const updatedService = {serviceName, price, userName, user_email, photo_url, description, location}
        console.log(updatedService)

        fetch(`https://agn11ssite.vercel.app/newservices/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount> 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OKAY'
                })
            }
        })
    }
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/92zTymZ/3banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className='text-5xl font-bold text-center py-10 text-[#55AA39]'>Update a Service</h1>
                    </div>
                </div>
            </div>
            
            <div className='my-4 h-2 bg-[#55AA39] w-3/4 mx-auto'></div>
            <form onSubmit={handleUpdateService} >
                <div className='grid gap-7'>
                    <div className='w-full md:w-3/4 mx-auto'>
                        <div className='grid justify-center md:flex lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Service Name</p>
                                <input type="text" name='serviceName' defaultValue={serviceName} placeholder="service name" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Service Price</p>
                                <input type="number" name='price' defaultValue={price} placeholder="90/100/80.99" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Your Name</p>
                                <input type="text" name='user_name' value={userName} readOnly placeholder="David/Jone/Korim" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Your Email</p>
                                <input type="email" name='user_email' placeholder="Price" className="input input-bordered w-full" value={user_email} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Photo of Service</p>
                                <input type="text" name='photo_url' defaultValue={photo_url} placeholder="http://rat.com/photo.png" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Service Description</p>
                                <input type="text" name='description' defaultValue={description} placeholder="Write few details about the service" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto '>
                        <p className='text-left font-semibold  text-xl mb-2'>Service Area</p>
                        <input type="text" name='location' placeholder="location" defaultValue={location}  className="input input-bordered " />
                    </div>
                </div>

                <input type="submit" value="Update the Service" className='w-1/2 bg-[#55AA39] text-white text-xl font-bold py-3 rounded-lg mt-5 mx-auto flex justify-center' />
            </form>
        </div>
    );
};

export default UpdateService;