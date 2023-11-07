import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Hook/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const BookingPage = () => {

    
    const {user} = useContext(AuthContext)
    // const [bookings, setBookings] = useState([])
    // const url = `http://localhost:5001/bookings?userEmail=${user.userEmail}`
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])

    const bookings = useLoaderData()
    const {userEmail, serviceName} = bookings

    return (
        <div>
            hello {bookings.length}
        </div>
    );
};

export default BookingPage;