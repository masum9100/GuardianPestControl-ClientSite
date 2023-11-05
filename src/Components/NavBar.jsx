import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className=''>
            <div className='bg-[#55AA39] text-white py-2'>
                <div className='max-w-screen-xl mx-auto md:flex justify-between px-2 lg:px-0'>
                    <div className='flex gap-2 items-center'>
                        <p><FaPhoneAlt></FaPhoneAlt></p>
                        <p>712-124-5375</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p>EXTERIOR CHECKLIST</p>//
                        <p>INTERIOR CHECKLIST</p>//
                        <p>TIPS & TRICKS</p>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100 max-w-screen-xl mx-auto text-center items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>All Service</a></li>
                            <li><a>FAQS</a></li>
                            <li><a>Contact Us</a></li>
                            <li>
                                <a>Dashboard</a>
                                <ul className="p-2 w-40">
                                    <li><a>My-services</a></li>
                                    <li><a>Add-services</a></li>
                                    <li><a>My-schedules</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div >
                        <img className='h-24' src="/logo.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:text-white'><a>Home</a></li>
                        <li><a>All Service</a></li>
                        <li><a>FAQS</a></li>
                        <li><a>Contact Us</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Dashboard</summary>
                                <ul className="p-2 w-40">
                                    <li><a>My-services</a></li>
                                    <li><a>Add-services</a></li>
                                    <li><a>My-schedules</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="px-3 py-2 rounded-lg font-bold bg-[#55AA39] text-white hover:text-black">LogIn</a>
                </div>
            </div>

        </div>

    );
};

export default NavBar;