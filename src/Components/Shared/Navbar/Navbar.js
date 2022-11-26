import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContextProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout().then(() => {
            toast.success("Successfully logout");
        }).catch(error => console.log(error))
    }
    const menuItem =
        <>
            <li className='lg:mr-3'><Link to="/">Home</Link></li>
            <li className='lg:mr-3'><Link to="/blogs">Blogs</Link></li>
            <li className='lg:mr-3'><Link to="/dashboard/add-product">Add Product</Link></li>
            <li className='lg:mr-3'><Link to="/dashboard/myproducts">My products</Link></li>

            {
                user?.uid ? <button onClick={handleLogout} className="btn btn-secondary text-black btn-sm mt-2">Log out</button>
                    : <Link to="/login" className="btn btn-secondary text-black btn-sm mt-2">Log in</Link>
            }

        </>

    return (
        <header className='bg-primary text-white px-8'>
            <div className="navbar">
                <div className="navbar-start start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-accent text-neutral">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to="/" className="text-4xl font-bold">ReMart</Link>
                </div>
                <div className="navbar-end end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;