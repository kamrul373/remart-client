import React from 'react';
import { toast } from 'react-hot-toast';

const BookingModal = ({ bookingData, setBookingData }) => {
    const { customerName, customerEmail, bookedProductName, bookedProductId, sellerEmailAddress, productPrice, pictureURL } = bookingData;
    const handleBookingProcess = (e) => {
        e.preventDefault();
        const form = e.target;
        const meetingLocation = form.meetingLocation.value;
        const customerPhone = form.phone.value;
        const finalBookingData = {
            customerName, customerEmail, customerPhone, bookedProductId, bookedProductName, productPrice, meetingLocation, sellerEmailAddress, pictureURL, status: false
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(finalBookingData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Successfully Booked");
                    setBookingData(null);
                }
            })

    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleBookingProcess}>
                        <div className="form-control">
                            <label htmlFor='name' className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered" id='name' name='name' defaultValue={customerName} disabled />
                        </div>
                        <div className="form-control">
                            <label htmlFor='name' className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered" id='email' name='email' defaultValue={customerEmail} disabled />
                        </div>
                        <div className="form-control">
                            <label htmlFor='bookedProductName' className="label">
                                <span className="label-text">Product</span>
                            </label>
                            <input type="text" className="input input-bordered" id='bookedProductName' name='bookedProductName' defaultValue={bookedProductName} disabled />
                        </div>
                        <div className="form-control">
                            <label htmlFor='productPrice' className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" className="input input-bordered" id='productPrice' name='productPrice' defaultValue={`${productPrice} Tk`} disabled />
                        </div>

                        <div className="form-control">
                            <label htmlFor='meetingLocation' className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type="text" className="input input-bordered" id='meetingLocation' name='meetingLocation' required />
                        </div>

                        <div className="form-control">
                            <label htmlFor='phone' className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" className="input input-bordered" id='phone' name='phone' required />
                        </div>

                        <div className="modal-action">
                            <label htmlFor="booking-modal" className="btn">Close</label>
                            <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;