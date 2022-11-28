import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContextProvider';
import { pageTitle } from '../../../utility/pageTitle';

const Dashboard = () => {
    // page title 
    pageTitle("Dashboard");
    // state
    const { user } = useContext(AuthContext)
    return (
        <div className='px-10 text-center my-3'>
            <div>
                <h2 className='text-3xl font-bold'>Welcome back ! {user?.displayName} </h2>
                <p className='mt-4'>Full Name : {user?.displayName} </p>
                <p className='mt-4'>Email : {user?.email} </p>
            </div>
        </div>
    );
};

export default Dashboard;