import React from 'react';
import { AiTwotoneMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';

const TableManage = ({ newservice }) => {
    const { _id, serviceName, price, userName, user_email, photo_url, description, location } = newservice

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5001/newservices/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure><img src={photo_url} alt="Shoes" className='w-48' /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto text-2xl text-[#55A839] font-bold mt-1">{serviceName}</h2>
                    <p className='text-md mx-auto py-1'>{description}</p>
                    <div className='border-2 border-green-600 mt-1 mx-auto rounded-lg'>
                        <p className='text-center font-bold mt-1'>{userName}</p>
                        <div>

                            <div className='flex justify-between px-1 gap-1'>
                                <div className='flex justify-center items-center'>
                                    <AiTwotoneMail className='text-[#55AA39]'></AiTwotoneMail>
                                    <p>{user_email}</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <FaLocationDot className='text-[#55AA39]'></FaLocationDot>
                                    <p>{location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='font-medium text-center py-1 mt-1'>Price ${price}</p>
                    <div className='flex justify-center gap-5'>
                        <div>
                            <button
                                onClick={() => handleDelete(_id)}
                                className='text-3xl text-red-700'><AiFillDelete></AiFillDelete></button>
                        </div>
                        <div>
                            <NavLink to={`update-service/${_id}`}>
                            <button className='text-3xl text-yellow-600'><AiFillEdit></AiFillEdit></button>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableManage;