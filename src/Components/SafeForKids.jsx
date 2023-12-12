import React, { useState } from 'react';
const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly", "bounce"]
import MovingText from 'react-moving-text'

const SafeForKids = () => {

    const [animationIndex, setAnimationIndex] = useState(0)
    const [animationType, setAnimationType] = useState(AnimationsForChaining[0])

    const handleChainAnimation = () => {
        setCounter(animationIndex + 1)
        setAnimationType(selectedItems[animationIndex + 1])
    }

    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='grid md:flex md:flex-row-reverse justify-between my-16 sm:px-4 lg:px-0'>
                <div className='w-full md:w-1/2 space-y-4 px-3 lg:px-0  lg:pr-10'>
                    <p className='text-xl'>AN ALTERNATIVE TO TOXIC PESTICIDES</p>
                    <MovingText
                        onAnimationEnd={handleChainAnimation}
                        type="bounce"
                        duration="5000ms"
                        timing="linear"
                        iteration={1}>
                        <p className='text-3xl text-[#55A839] font-bold'>Safe for Kids & Pets</p>
                    </MovingText>
                    
                    <p className='text-md'>Our IPM approach is an effective and environmentally sensitive approach to natural pest management, and rely on a combination of natural, common-sense practices, and are based on our knowledge and understanding of insect biologies, environments, habits, and natural habitats. </p>
                    <p className='text-md'>The use of these practices, baits, and techniques assist us in controlling pests the natural way, using very little insecticides! Improving sanitary conditions, monitoring and correcting landscape and structural conditions, help us keep those pesty pests from entering your home, Naturally!</p>
                    <button className="px-3 py-2 rounded-full font-bold bg-[#55AA39] text-white ">Call 712-124-5375</button>
                    
                </div>
                <div className='px-10 lg:px-0 md:pr-10 lg:pr-40 items-center'>
                    <img src="./safeforkid.png" className='items-center' alt="" />
                </div>
            </div>
        </div>
    );
};

export default SafeForKids;