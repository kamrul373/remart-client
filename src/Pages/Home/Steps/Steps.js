import React from 'react';

const Steps = () => {
    return (
        <div className='lg:px-10 lg:py-20 py-6'>
            <h2 className='lg:text-4xl text-3xl font-bold text-center '>How will you proceed ?</h2>
            <div className='text-center my-10 md:block hidden'>
                <ul className="steps">
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose Laptop</li>
                    <li className="step step-primary">Book</li>
                    <li className="step step-primary">Meet</li>
                    <li className="step step-primary">Pay Online</li>
                    <li className="step step-primary">Get Product</li>
                </ul>
            </div>
            <div className='text-center my-10 md:hidden block'>
                <ul className="steps steps-vertical">
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose Laptop</li>
                    <li className="step step-primary">Book</li>
                    <li className="step step-primary">Meet</li>
                    <li className="step step-primary">Pay Online</li>
                    <li className="step step-primary">Get Product</li>
                </ul>
            </div>
        </div>
    );
};

export default Steps;