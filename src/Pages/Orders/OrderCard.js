import React from 'react';

const OrderCard = ({ order }) => {
    const { bookedProductName, productPrice, pictureURL, _id } = order;
    return (
        <div className='p-6 shadow-xl rounded bg-white my-4 flex md:flex-row flex-col gap-4 md:justify-between items-center'>
            <div className='md:flex md:items-center gap-4 '>
                <img src={pictureURL} alt={bookedProductName} className="w-[100px]  mx-auto" />
                <div className=''>
                    <h2 className='md:text-lg font-bold md:text-left text-center'>{bookedProductName}</h2>
                    <h2 className='md:text-lg md:text-left text-center'>Price : {productPrice} Tk </h2>
                </div>
            </div>
            <div className='justify-end'>
                <button className='btn btn-primary text-white '>Pay Now</button>
            </div>
        </div>
    );
};

export default OrderCard;