import React from 'react';
import { FaRegDotCircle } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#222222]'>
            <footer className="footer p-10 text-white max-w-screen-xl mx-auto">
                <aside>
                    <img src="./logo.png" className='h-32' alt="" />
                    <p><span className='font-bold'>Guardian Pest Control </span>in Miami. <br /> Safe for Kids & Pets, No Harmful, <br /> Smelly Chemicals! 100% Guaranteed.</p>
                </aside>
                <nav>
                    <header className="footer-title text-[#55A839]">Services</header>
                    <a className="link link-hover flex gap-1 items-center"> <FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle> ROACHES</a>
                    <a className="link link-hover flex gap-1 items-center"><FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle>RODENT</a>
                    <a className="link link-hover flex gap-1 items-center"><FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle>SPIDERS</a>
                    <a className="link link-hover flex gap-1 items-center"><FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle>FLYING INSECTS</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#55A839]">Company</header>
                    <a className="link link-hover flex gap-1 items-center"><FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle>About us</a>
                    <a className="link link-hover flex gap-1 items-center"><FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle>Contact</a>
                    <a className="link link-hover flex gap-1 items-center"><FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle>Jobs</a>
                    <a className="link link-hover flex gap-1 items-center"><FaRegDotCircle className='text-[#55A839]'></FaRegDotCircle>Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#55A839]">Contact</header>
                    <a className="link link-hover">14629 SW 104 Street #239 <br /> Miami Florida 33186</a>
                    <a className="link link-hover">(712) 123-5375</a>
                </nav>
                

            </footer>
            <footer className="footer footer-center p-4 bg-[#222222] text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Guardian Pest Control</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;