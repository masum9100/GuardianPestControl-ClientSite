import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Hook/AuthProvider';
import TableBook from './TableBook';


const BookingPage = () => {


    const { user, loading } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        if (!loading) {
            const url = `http://localhost:5001/bookings?userEmail=${user.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setBookings(data))
        }

    }, [user.email, loading])
    console.log(user)

   

    return (
        <div className='max-w-screen-xl mx-auto'>

            <div className="hero mt-5" style={{ backgroundImage: 'url(https://i.ibb.co/3W17zxH/2banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-10">
                        <p className='text-3xl text-[#55AA39] font-bold text-center'>The Services You Booked</p>
                    </div>
                </div>
            </div>
            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Provider's Email </th>
                            <th>Your Email</th>
                            <th>Your Location</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bookings.map(booking => <TableBook>
                                key={booking._id}
                                booking={booking}
                            </TableBook>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default BookingPage;