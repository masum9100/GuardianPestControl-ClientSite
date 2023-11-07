import React from 'react';

const TableBook = ({booking}) => {
    console.log('Booking:', booking);
    const {serviceName, userEmail, price, serviceProEmail, date, location} = booking;
    
    return (
        <tr className='bg-gray-200 py-2'>
            
            <td>{serviceName}</td>
            <td>{serviceProEmail}</td>
            <td>{userEmail}</td>
            <td>{location}</td>
            <td>{date}</td>
            <td>{price}</td>
            
        </tr>
    );
};

export default TableBook;