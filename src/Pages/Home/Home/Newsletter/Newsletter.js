import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <section className="bg-primary text-white">
                <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-white xl:text-4xl dark:text-white">
                        Join us and get exclusive deals!
                    </h2>

                    <div className="mt-8 lg:mt-0">
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                            <input type="text" placeholder="Email" className="input input-bordered input-primary w-full " />

                            <button className="px-6 py-2 text-sm tracking-wide font-bold capitalize transition-colors duration-300 transform btn-secondary text-black rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                Join
                            </button>
                        </div>

                        <p className="mt-3 text-sm  text-white">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;