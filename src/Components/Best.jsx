import React, { useState } from 'react';
const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly", "bounce"]
import MovingText from 'react-moving-text'

const Best = () => {

    const [animationIndex, setAnimationIndex] = useState(0)
    const [animationType, setAnimationType] = useState(AnimationsForChaining[0])

    const handleChainAnimation = () => {
        setCounter(animationIndex + 1)
        setAnimationType(selectedItems[animationIndex + 1])
    }

    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='grid md:flex justify-between my-16 sm:px-4 lg:px-0'>
                <div className='w-full md:w-1/2 space-y-4 px-3 lg:px-0  lg:pr-10'>
                    <p className='text-xl'>HIGH QUALITY SERVICE</p>
                    <MovingText
                        onAnimationEnd={handleChainAnimation}
                        type="bounce"
                        duration="5000ms"
                        timing="linear"
                        iteration={1}>
                        <p className='text-3xl text-[#55A839] font-bold'>The Best In Khulna</p>
                    </MovingText>
                    
                    <p className='text-md'>We’re a small company. This allows us to focus on our customers, our customer service, and delivering services that our customers pay for and truly deserve.</p>
                    <p className='text-md'>We certainly want to grow our business, but not at the expense of losing customers due to hurried technicians, missing appointments, and overselling routes. Our customer churn rate is low and our employee retention is high. A perfect recipe for success.</p>
                    <button className="px-3 py-2 rounded-full font-bold bg-[#55AA39] text-white ">Testimonials</button>
                    
                </div>
                <div className='px-10 lg:px-0 md:pr-10 lg:pr-40 items-center'>
                    <img src="./best.png" className='items-center' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Best;