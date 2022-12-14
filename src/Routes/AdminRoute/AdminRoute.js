import React, { useContext } from 'react';

import { AuthContext } from "../../context/AuthContextProvider"

import Loading from '../../Components/Loading/Loading';
import { useIsAdmin } from '../../utility/useIsAdmin/useIsAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [adminLoading, isAdmin] = useIsAdmin(user?.email);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    } else if (!isAdmin) {
        return <div className='flex justify-center items-center bg-red-300 text-red-700 min-h-screen font-bold'>
            <h1 className='text-4xl'>UnAuthorized Access</h1>
        </div>
    }


};

export default AdminRoute;