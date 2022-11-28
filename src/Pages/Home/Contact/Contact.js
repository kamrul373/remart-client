import React from 'react';

const Contact = () => {
    return (
        <div className='bg-white'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-primary">Need Help!</h2>
                        <div className="dark:text-gray-400">Lets talk to solve your issue.</div>
                    </div>
                    <img src="https://www.mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded input  input-bordered input-primary" />
                        <div data-lastpass-icon-root="true" style={{ position: "relative !important", height: " 0px !important", width: "0px !important", float: 'left !important' }}></div>
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded input  input-bordered input-primary" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded  textarea textarea-primary"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn btn-primary text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;