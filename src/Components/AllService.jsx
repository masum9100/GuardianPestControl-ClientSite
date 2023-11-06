import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const AllService = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
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