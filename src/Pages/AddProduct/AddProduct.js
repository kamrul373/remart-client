import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../context/AuthContextProvider';
import "./AddProduct.css";
const AddProduct = () => {
    // auth context 
    const { user } = useContext(AuthContext);
    // react query : loading cateories
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/category`);
            const result = await res.json();
            return result;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const categoryId = form.category.selectedOptions[0].getAttribute('data-catid');
        const description = form.description.value.split(".");
        const resalePrice = parseInt(form.resalePrice.value);
        const originalPrice = form.originalPrice.value;
        const usedDuration = form.usedDuration.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const productCondition = form.productCondition.value;
        const postedTime = new Date().toLocaleDateString();
        const sellerPhoneNumber = form.sellerPhoneNumber.value;
        const location = form.location.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const status = "unsold"
        // processing image by axios
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);
        formData.set('key', process.env.REACT_APP_imgbb_key);

        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        }).then(response => {
            if (response.data.success) {
                const pictureURL = response.data.data.url;
                const productData = {
                    productName,
                    category,
                    categoryId,
                    pictureURL,
                    description,
                    resalePrice,
                    originalPrice,
                    usedDuration,
                    yearOfPurchase,
                    productCondition,
                    postedTime,
                    sellerPhoneNumber,
                    location,
                    sellerName,
                    sellerEmail,
                    status
                }
                fetch(`${process.env.REACT_APP_SERVER_URL}/product`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("remart-token")}`
                    },
                    body: JSON.stringify(productData)
                }).then(response => response.json())
                    .then(data => {
                        console.log(data)
                        toast.success("Product Published Successfully");
                    }).catch(error => console.log(error))

            }
        })

    }

    return (
        <div className='p-4'>
            <h2 className='text-3xl font-bold'>Add Products</h2>
            <form onSubmit={handleAddProduct}>
                <div className="form-control">
                    <label htmlFor='productName' className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Product Name" className="input input-bordered input-primary" id='productName' name='productName' required />
                </div>
                <div className="form-control">
                    <label htmlFor='category' className="label">
                        <span className="label-text">Product Category</span>
                    </label>
                    <select
                        name="category" className="select select-primary w-full" id="category"
                        required

                    >
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.category}
                                data-catid={category._id}
                            >
                                {category.category}
                            </option>)
                        }
                    </select>
                </div>
                <div className="form-control">
                    <label className="label" htmlFor='image'>
                        <span className="label-text">Product Picutre</span>
                    </label>
                    <input type="file" className="file-input file-input-ghost input-bordered input-primary w-full " name="image" accept="image/*" id='image' required />
                </div>
                <div className="form-control">
                    <label className="label" htmlFor='description'>
                        <span className="label-text">Description ( <span className='font-semibold'>Please type each feature in single sentence and put ending .</span> )</span>
                    </label>
                    <textarea name="description" id="description" className="textarea  textarea-primary"
                        rows="5" placeholder="Description"></textarea>
                </div>
                <div className="form-control">
                    <label className="label" htmlFor='resalePrice'>
                        <span className="label-text">Reslae Price</span>
                    </label>
                    <input name='resalePrice' type="text" placeholder="Resale Price" className="input input-bordered input-primary w-full " id="resalePrice" required />
                </div>
                <div className="form-control">
                    <label className="label" htmlFor='originalPrice'>
                        <span className="label-text">Original Price</span>
                    </label>
                    <input name='originalPrice' type="text" placeholder="Original Price" className="input input-bordered input-primary w-full " id="originalPrice" required />
                </div>

                <div className="form-control">
                    <label htmlFor='usedDuration' className="label">
                        <span className="label-text">Product Used Duration ?</span>
                    </label>
                    <input type="text" placeholder="How long used ?" className="input input-bordered input-primary" id='usedDuration' name='usedDuration' required />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor='yearOfPurchase'>
                        <span className="label-text">Year Of Purchase</span>
                    </label>
                    <input name='yearOfPurchase' type="text" placeholder="Original Price" className="input input-bordered input-primary w-full " id="yearOfPurchase" required />
                </div>
                <div className="form-control">
                    <label className="label" htmlFor='productCondition'>
                        <span className="label-text">Product Condition</span>
                    </label>
                    <select name='productCondition' className="select select-primary w-full " required>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor='location' className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="Location" className="input input-bordered input-primary" id='location' name='location' required />
                </div>
                <div className="form-control">
                    <label className="label" htmlFor='sellerPhoneNumber'>
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input name='sellerPhoneNumber' type="text" placeholder="Seller Phone Number" className="input input-bordered input-primary w-full " id="sellerPhoneNumber" required />
                </div>

                <div className="mt-4">
                    <button className='btn btn-primary'>
                        Add Product
                    </button>
                </div>

            </form>

        </div>
    );
};

export default AddProduct;