import React from 'react';
import { Link } from 'react-router-dom';

const Regsiter = () => {
    return (
        <div>
            <div className="hero lg:min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card lg:w-[450px] w-full shadow-2xl bg-base-100 lg:px-4 lg:pt-6 p-2">
                        <h1 className="lg:text-5xl text-3xl font-bold text-center">Register</h1>
                        <div className="card-body">
                            <form>
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
                                    <input type="text" placeholder="password" className="input input-bordered" id='password' name='password' required />
                                    <label className="label">
                                        <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className='text-center'>Don't have an account? <Link className='text-primary' to="/register">Create an account</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regsiter;