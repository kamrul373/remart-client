import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

import { AuthContext } from '../context/AuthContextProvider';
import { useIsAdmin } from '../utility/useIsAdmin/useIsAdmin';
import { useIsSeller } from '../utility/useIsSeller/useIsSeller';
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [sellerLoading, isSeller] = useIsSeller(user?.email);
    const [adminLoading, isAdmin] = useIsAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="dashboard-drawer" className="btn bg-blue-700 rounded-none w-full drawer-button border-t-1 border-blue-600  lg:hidden"><span className='mr-2'>Dashboad</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                    <div className='lg:px-8 my-6'>
                        {
                            <Outlet />
                        }
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#1B1B1B] text-white">
                        <div className="avatar flex items-center flex-col mt-4">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt={user?.displayName} />
                            </div>
                            <h2 className='font-bold text-2xl my-3'>{user?.displayName}</h2>
                        </div>
                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:bg-primary duration-500 border-b-[1px] border-zinc-400 mb-2'><Link to="/dashboard">Dashbaord</Link></li>
                        {
                            !isSeller && !isAdmin && <li className='hover:bg-primary duration-500 border-b-[1px] border-zinc-400 mb-2'><Link to="/dashboard/orders">My Orders</Link></li>
                        }
                        {
                            isSeller && <>

                                <li className='hover:bg-primary duration-500 border-b-[1px] border-zinc-400 mb-2'><Link to="/dashboard/add-product">Add Product</Link></li>
                                <li className='hover:bg-primary duration-500 border-b-[1px] border-zinc-400 mb-2'><Link to="/dashboard/myproducts">My Products</Link></li>

                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li className='hover:bg-primary duration-500 border-b-[1px] border-zinc-400 mb-2'><Link to="/dashboard/sellers">Sellers</Link></li>

                                <li className='hover:bg-primary duration-500 border-b-[1px] border-zinc-400 mb-2'><Link to="/dashboard/buyers">Buyers</Link></li>
                                <li className='hover:bg-primary duration-500 border-b-[1px] border-zinc-400 mb-2'><Link to="/dashboard/reports">Reports</Link></li>
                            </>

                        }

                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;