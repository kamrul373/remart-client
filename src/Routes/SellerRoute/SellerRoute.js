import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContextProvider"
import Loading from '../../Components/Loading/Loading';
import { useIsSeller } from '../../utility/useIsSeller/useIsSeller';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [sellerLoading, isSeller] = useIsSeller(user?.email)

    if (loading || sellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children;

    } else if (!isSeller.isSeller) {
        return <div className='flex justify-center items-center bg-red-300 text-red-700 min-h-screen font-bold'>
            <h1 className='text-4xl'>UnAuthorized Access</h1>
        </div>
    }
};

export default SellerRoute;