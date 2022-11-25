import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { FaBars } from "react-icons/fa";
import { AuthContext } from '../context/AuthContextProvider';
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="remart-dashboard-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content ">
                    <label htmlFor="remart-dashboard-drawer" className="btn btn-primary drawer-button w-full  border-t-2 border-blue-700 rounded-none font-bold text-white lg:hidden">
                        <span className='mr-2'>Dashboard</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                    </label>
                    {
                        <Outlet></Outlet>
                    }
                </div>
                <div className="drawer-side bg-[#041737] text-white  ">
                    <label htmlFor="remart-dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu py-4 w-80 ">
                        <div className='mt-3'>
                            <div className="avatar flex justify-center">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </div>
                            <h2 className='text-center text-2xl font-bold my-3'>{user?.displayName}</h2>
                        </div>
                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:bg-primary duration-500'><Link>Sidebar Item 1</Link></li>
                        <li className='hover:bg-primary duration-500'><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;