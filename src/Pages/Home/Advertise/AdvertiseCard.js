import React, { useContext } from 'react';
import useSellerStatus from '../../../utility/useSellerStatus';
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthContextProvider';
import { Link } from 'react-router-dom';
const AdvertiseCard = ({ product, setBookingData }) => {
    // auth state
    const { user } = useContext(AuthContext)
    // destructuring
    const { productName, category, pictureURL, description, resalePrice, originalPrice, usedDuration, yearOfPurchase, productCondition, postedTime, sellerPhoneNumber, location, sellerName, sellerEmail, _id } = product;

    // checking seller status
    const sellerVerificationStatus = useSellerStatus(sellerEmail);
    //console.log(sellerVerificationStatus);
    const currentBookingData = {
        customerName: user?.displayName,
        customerEmail: user?.email,
        bookedProductName: productName,
        bookedProductId: _id,
        sellerEmailAddress: sellerEmail,
        productPrice: resalePrice,
        pictureURL
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl md:w-96 w-full min-h-[850px] mx-auto">
                <figure><img src={pictureURL} alt={productName} className="lg:w-[300px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">
                        {productName.slice(0, 20)}
                        <div className="badge badge-accent hidden md:block">{category}</div>
                    </h2>
                    <div className='mt-3'>
                        <h3 className='text-lg font-semibold mr-3'>Resale Price : <span className='text-primary'>{resalePrice} Tk</span></h3>
                    </div>
                    <p className='mt-4'>{description.join(".")}</p>
                    <div className='mt-1'>
                        <div className="font-semibold ">Orignial Price : {originalPrice} Tk</div>
                        <div className="font-semibold">Used Duration : {usedDuration} . </div>
                        <div className="font-semibold">Condition : {productCondition[0].toUpperCase()}{productCondition.slice(1, productCondition.length)} . </div>
                        <div className="">Year Of Purchase : {yearOfPurchase}</div>

                    </div>
                    <div>
                        <h3 className='font-semibold'>Seller Information </h3>
                        <p className='flex items-center'><span className='mr-2'>Seller Name: {sellerName}</span>
                            {
                                sellerVerificationStatus && <FaCheckCircle className='text-primary' title="Verified" />
                            }
                        </p>
                        <p>Phone: {sellerPhoneNumber}</p>
                        <p>Location: {location} </p>
                        <div className="">Posted on {postedTime}</div>
                    </div>
                    <div className="card-actions justify-center mt-4">
                        {user?.uid ?
                            <label
                                onClick={() => setBookingData(currentBookingData)}
                                htmlFor="booking-modal" className="btn btn-primary font-bold text-white w-full">Book Now</label>
                            : <Link to="/login" className="btn btn-primary font-bold text-white w-full">Book Now</Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;