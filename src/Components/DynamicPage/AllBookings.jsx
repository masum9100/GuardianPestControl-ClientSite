import React from 'react';

const AllBookings = ({ allBooking }) => {

    const { serviceName, userEmail, price, serviceProEmail, date, location } = allBooking;
    return (
        <tr className='bg-gray-200 py-2'>

            <td>{serviceName}</td>
            <td>{serviceProEmail}</td>
            <td>{userEmail}</td>
            <td>{location}</td>
            <td>{date}</td>
            <td>{price}</td>
            <td>
                <div className='relative inline-flex'>
                    <select className='appearance-none bg-transparent border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                        <option value="pending" className='text-gray-700'>Pending</option>
                        <option value="processing" className='text-blue-500 '>Processing</option>
                        <option value="completed" className='text-green-500'>Completed</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className='fill-current h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 5-5m5 10l-5-5 5-5" /></svg>
                    </div>
                </div>
            </td>


        </tr>
    );
};

export default AllBookings;