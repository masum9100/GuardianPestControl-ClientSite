import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Hook/AuthProvider';
import TableManage from './TableManage';

const ManageServices = () => {

    const { user, loading } = useContext(AuthContext)
    const [newservices, setNewservices] = useState([])

    useEffect(() => {
        if (!loading) {
            const url = `http://localhost:5001/newservices?user_email=${user.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setNewservices(data))
        }

    }, [user.email, loading])
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero mt-5" style={{ backgroundImage: 'url(https://i.ibb.co/92zTymZ/3banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-10">
                        <p className='text-3xl text-[#55AA39] font-bold text-center'>My Services</p>
                    </div>
                </div>
            </div>
            {
                newservices.length > 0 ? (
                    <div className='grid grid-flow-col'>
                        {
                            newservices.map(newservice => <TableManage
                                key={newservice._id} newservice={newservice}></TableManage>)

                        }
                    </div>
                ) : (
                    <div className="text-center my-5 relative">
                        {/* <img src={cry} alt="" className='mx-auto' /> */}
                        <div className='absolute bottom-10 left-0 right-0'>
                            <p className='text-3xl font-bold text-yellow-600'>OPPS!</p>
                            <p className='text-xl font-bold text-red-300'>You didn't booked any service yet</p>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default ManageServices;