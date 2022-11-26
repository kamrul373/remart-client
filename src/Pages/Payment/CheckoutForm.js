import React, { useEffect, useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
const CheckoutForm = ({ orderData }) => {
    // order data
    const { productPrice, customerEmail, customerName } = orderData;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            setError(error.message)
        } else {
            setError("");
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: customerEmail
                    },
                },
            },
        );
        if (confirmError) {
            return setError(confirmError.message)
        } else {
            setError("");
        }
        console.log("payment intent", paymentIntent)
        setProcessing(false)

    };

    return (
        <form onSubmit={handleSubmit} className="md:w-[400px] mt-8">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-primary text-white font-bold mt-8 ' disabled={!stripe || !elements || processing}>
                Pay Now
            </button>
            <p className='text-red-700 mt-4'>{error && error}</p>
        </form>
    );
};

export default CheckoutForm;