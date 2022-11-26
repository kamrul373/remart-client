import React from 'react';

const ProductCard = ({ product }) => {
    const { productName, category, pictureURL, description, resalePrice, originalPrice, usedDuration, yearOfPurchase, productCondition, postedTime, sellerPhoneNumber, location, sellerName } = product
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={pictureURL} alt={productName} className="lg:w-[300px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <div className='md:flex md:flex-row flex-col mt-1'>
                    <div className="badge badge-accent font-semibold">Posted on {postedTime}</div>
                    <div className="badge badge-accent font-semibold">{category}</div>
                    <div className="badge badge-accent font-semibold  ">Orignial Price : {originalPrice} Tk</div>
                </div>
                <div className='mt-3'>
                    <h3 className='text-lg font-semibold mr-3'>Resale Price : <span className='text-primary'>{resalePrice} Tk</span></h3>
                </div>
                <p><span className='font-semibold'>Description <br /></span> {description.join(". ")}</p>
                <div className='md:flex md:flex-row flex-col'>
                    <span className="mr-3">Used Duration : {usedDuration} . </span>
                    <span className="mr-3">Condition : {productCondition[0].toUpperCase()}{productCondition.slice(1, productCondition.length)} . </span>
                    <span className="">Year Of Purchase : {yearOfPurchase}</span>
                </div>
                <div>
                    <h3 className='font-semibold'>Seller Information </h3>
                    <p>Seller Name: {sellerName}</p>
                    <p>Phone: {sellerPhoneNumber}</p>
                    <p>Location: {location} </p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary font-bold text-white ">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;