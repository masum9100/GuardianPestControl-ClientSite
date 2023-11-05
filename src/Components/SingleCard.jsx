import React from 'react';

const SingleCard = ({ service }) => {
    const { name, short_description, image1, price, service_provider_name, service_provider_image, bg_image } = service
    return (
        <div className="card shadow-xl image-full">
            <figure><img className='' src={bg_image} alt="" /></figure>
            <div className="card-body">
                <img className='w-40 h-40 rounded-full  mx-auto' src={image1} alt="" />
                <h2 className="card-title mx-auto text-2xl text-[#55A839] font-bold mt-2">{name}</h2>
                <p className='text-md text-white mx-auto py-2'>{short_description}</p>
                <div className='mx-auto w-1/2 border-2 border-green-600 rounded-2xl'>
                    <p className='text-center font-bold'>Service Provider</p>
                    <div className=''>
                        <div>
                            <img className='w-20 h-20 rounded-full mx-auto' src={service_provider_image} alt="" />
                            <p className='text-center py-1'>{service_provider_name}</p>
                        </div>
                        <p className='text-center bg-[#55A839] rounded-b-2xl py-2'>Price: ${price}</p>
                    </div>
                </div>
                <button className="py-2 bg-[#55A839] w-3/4 mx-auto rounded-lg mt-2">See Details</button>
            </div>
        </div>
    );
};

export default SingleCard;