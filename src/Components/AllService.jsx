import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const AllService = () => {

    const [services, setServices] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredServices = services.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setServices(filteredServices);
    };

    return (
        <div>
            <div className="hero my-5" style={{ backgroundImage: 'url(https://i.ibb.co/sbB3gnc/Artboard-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="py-10">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <form className='w-full' onSubmit={handleSearch}>
                            <input type="search" name="search" placeholder='Search here' id="" className='mb-5 mr-2 p-2 rounded-l-xl text-black' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                            <input type="submit" value="Search"  className='text-white rounded-r-xl p-2 bg-[#55A839]'/>
                        </form>
                    </div>
                </div>
            </div>
            <div className='grid gap-4 text-center'>
                <p className='text-xl'>MIAMI RESIDENTIAL PEST CONTROL</p>
                <p className='text-3xl text-[#55A839] font-bold'>Pest Control Services</p>
                <p className='text-md'>WE KNOW UNDERSTANDING INSECT BIOLOGIES, FEEDING HABITS, MATING HABITS, <br /> AND THEIR REQUIREMENTS PROVIDE US WITH THE NEEDED TOOLS TO CONTROL THESE PESTS.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4 mt-5 px-2' >
                {
                    services.map(service => <SingleCard key={service._id} service={service}>

                    </SingleCard>)

                }
            </div>
        </div>
    );
};

export default AllService;