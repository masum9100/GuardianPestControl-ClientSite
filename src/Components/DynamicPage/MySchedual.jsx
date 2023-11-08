import React, { useContext } from 'react';
import { AuthContext } from '../Hook/AuthProvider';
import BookingPage from './BookingPage';
import { useLoaderData } from 'react-router-dom';
import cry from '../../../public/cry.gif'
import AllBookings from './AllBookings';

const MySchedual = () => {

    const allBookings = useLoaderData()


    return (
        <div>
            <BookingPage></BookingPage>
            <div className='max-w-screen-xl mx-auto'>

                <div className="hero mt-5" style={{ backgroundImage: 'url(https://i.ibb.co/4FSNF4S/4banner.jpg)' }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md py-10">
                            <p className='text-3xl text-[#55AA39] font-bold text-center'>My Pending Works</p>
                        </div>
                    </div>
                </div>
                {/* table  */}
                {
                    allBookings.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="table table-xs mx-auto my-5">
                                <thead>
                                    <tr>

                                        <th>Service Name</th>
                                        <th>Provider's Email </th>
                                        <th>User Email</th>
                                        <th>User Location</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        allBookings.map(allBooking => <AllBookings
                                        key={allBooking._id}
                                        allBooking={allBooking}>

                                        </AllBookings>)
                                        
                                    }
                                </tbody>

                            </table>
                        </div>
                    ) : (
                        <div className="text-center my-5 relative">
                            <img src={cry} alt="" className='mx-auto' />
                            <div className='absolute bottom-10 left-0 right-0'>
                                <p className='text-3xl font-bold text-yellow-600'>OPPS!</p>
                                <p className='text-xl font-bold text-red-300'>You didn't booked any service yet</p>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MySchedual;