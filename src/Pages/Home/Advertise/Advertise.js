import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingModal from '../../../Components/BookingModal/BookingModal';
import { AuthContext } from '../../../context/AuthContextProvider';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const [bookingData, setBookingData] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["advertisedProducts"],
        queryFn: async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/advertisedproducts`);
            const result = await response.json();
            return result
        }
    })
    //console.log(products)
    return (
        <div className='lg:px-10 md:px-4 px-6'>
            <h2 className='lg:text-4xl font-bold text-center lg:my-16 my-8'>Advertised Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    products.map(product => <AdvertiseCard
                        key={product._id}
                        product={product}
                        setBookingData={setBookingData}
                    ></AdvertiseCard>)
                }
            </div>
            {bookingData && <BookingModal
                bookingData={bookingData}
            ></BookingModal>}
        </div>
    );
};

export default Advertise;