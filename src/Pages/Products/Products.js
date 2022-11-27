import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import Loading from "../../Components/Loading/Loading"
import ReportModal from '../../Components/ReportModal/ReportModal';
import { pageTitle } from '../../utility/pageTitle';
import ProductCard from './ProductCard';

const Products = () => {
    // booking data state
    const [bookingData, setBookingData] = useState(null);
    const [reportData, setReportData] = useState(null);
    // products laoder
    const products = useLoaderData()

    // page title 
    pageTitle(products[0].category)
    // navigation 
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='p-9'>
            <h2 className='lg:text-4xl text-3xl font-bold'>Products : {products.length} </h2>
            <div className='grid grid-cols-1 gap-6 mt-8'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setBookingData={setBookingData}
                        setReportData={setReportData}
                    ></ProductCard>)
                }
            </div>
            {
                bookingData && <BookingModal
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                ></BookingModal>
            }
            {
                reportData && <ReportModal
                    reportData={reportData}
                    setReportData={setReportData}
                ></ReportModal>
            }
        </div>
    );
};

export default Products;