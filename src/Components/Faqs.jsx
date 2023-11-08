import React from 'react';

const Faqs = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What pests do you specialize in treating?
                </div>
                <div className="collapse-content">
                    <p>Provide information about the specific types of pests your company is equipped to handle, such as rodents, insects, wildlife, etc.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How do I know if I have a pest infestation?
                </div>
                <div className="collapse-content">
                    <p>Offer signs and indicators of common pest problems, like droppings, chewed wires, unusual noises, or visible pests.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Are your treatments safe for pets and children?
                </div>
                <div className="collapse-content">
                    <p>Explain the safety measures and products used to ensure the well-being of household members and pets during and after treatments.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What is the process for scheduling a pest inspection or treatment?
                </div>
                <div className="collapse-content">
                    <p>Describe the steps customers should take to request an inspection, receive a quote, and schedule a service appointment.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What should I do before a pest control treatment?
                </div>
                <div className="collapse-content">
                    <p>Provide pre-treatment instructions, such as removing food and water sources, storing personal items, and securing pets.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How long does a typical pest control treatment take?
                </div>
                <div className="collapse-content">
                    <p>Offer a general timeframe for different types of treatments, explaining factors that can affect the duration.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                What is your approach to eco-friendly or environmentally responsible pest control?
                </div>
                <div className="collapse-content">
                    <p>Explain any eco-friendly practices or products your company employs, and how they benefit both the environment and your clients.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Do you offer warranties or guarantees on your pest control services?
                </div>
                <div className="collapse-content">
                    <p>Detail any guarantees or warranties on your services, including what is covered and for how long.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I prevent future pest infestations?
                </div>
                <div className="collapse-content">
                    <p>Provide tips and recommendations for ongoing pest management, like sealing entry points, maintaining cleanliness, and landscaping practices.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
                </div>
                <div className="collapse-content">
                    <p>List the accepted forms of payment and any financing options or payment plans that may be available.</p>
                </div>
            </div>
        </div>
    );
};

export default Faqs;