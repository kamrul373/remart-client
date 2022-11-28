import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { pageTitle } from '../../../utility/pageTitle';

import CheckoutForm from './CheckoutForm';

const Payment = () => {
    // page title 
    pageTitle("Payment");
    const orderData = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    return (
        <div className='px-10'>
            <h2 className='text-3xl font-bold my-3'>Payment</h2>
            <h2 className='text-2xl font-semibold mt-4'>Product: {orderData.bookedProductName}</h2>
            <p className='text-xl text-primary my-3'>Paying Amount : {orderData.productPrice} Tk</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm orderData={orderData} />
            </Elements>
        </div>
    );
};

export default Payment;