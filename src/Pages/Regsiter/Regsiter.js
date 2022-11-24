import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { pageTitle } from '../../utility/pageTitle';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContextProvider';
import { toast } from 'react-hot-toast';
const Regsiter = () => {
    // error state 
    const [error, setError] = useState(null);
    // form process loading state
    const [customLoading, setCustomLoading] = useState(false);
    // page title
    pageTitle("Register");
    // auth context 
    const { createUser, updateUser } = useContext(AuthContext);

    // regiser form event handler
    const handleRegister = (e) => {
        e.preventDefault();
        setCustomLoading(true);
        // form data
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const accountType = form.accountType.value;
        // processing image
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);
        formData.set('key', process.env.REACT_APP_imgbb_key);

        // creating user
        createUser(email, password)
            .then(result => {
                setError(null);
                // uploading image by axios
                axios({
                    method: 'post',
                    url: 'https://api.imgbb.com/1/upload',
                    data: formData
                })
                    .then(response => {
                        if (response.data.success) {
                            const imageURL = response.data.data.url;
                            //console.log(imageURL)
                            // updating profile 
                            updateUser(name, imageURL);
                            toast.success("Registered Successfully")
                            const user = {
                                email: result.user.email,
                                role: accountType
                            }

                            // saving user on database
                            fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
                                method: "PUT",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(user)
                            })
                                .then(response => response.json())
                                .then(data => {
                                    //console.log(data);
                                    // token saving on localstorage
                                    localStorage.setItem("remart-token", data.token);
                                    form.reset();
                                })
                        }
                    })
                    .catch(error => {
                        setCustomLoading(false)
                        //console.log(error)
                    });

                setCustomLoading(false)
            }).catch(err => {
                setCustomLoading(false)
                setError(err.message);
                // custom error message
                if (error) {
                    if (error.includes("auth/email-already-in-use")) {
                        toast.error("User already exist")
                    }
                    if (error.includes("auth/weak-password")) {
                        toast.error("Password should contain 6 charecters")
                    }
                }
            })
        //console.log(name, email, password, image, accountType)
    }

    return (
        <div>
            <div className="hero lg:min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card lg:w-[450px] w-full shadow-2xl bg-base-100 lg:px-4 lg:pt-6 p-2">
                        <h1 className="lg:text-5xl text-3xl font-bold text-center">Register</h1>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label htmlFor='name' className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" id='name' name='name' required />
                                </div>
                                <div className="form-control">
                                    <label htmlFor='email' className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" id='email' name='email' required />
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor='password'>
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" id='password' name='password' required />
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor='password'>
                                        <span className="label-text">Profile picutre</span>
                                    </label>
                                    <input type="file" className="file-input file-input-ghost input-bordered w-full " name="image" accept="image/*" required />
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Account Type</span>
                                    </label>
                                    <select className="select select-bordered" name='accountType'>
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary"> {customLoading ? <span className="btn btn-circle bg-transparent loading"></span> : "Register"} </button>
                                </div>

                            </form>
                            <p className='text-center'>Already have an account? <Link className='text-primary' to="/login">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Regsiter;