import React, { useContext } from 'react';
import { AuthContext } from '../../../../../71-doctors-portal/doctors-portal-client/src/context/AuthContextProvider/AuthContextProvider';
import Loading from '../../Components/Loading/Loading';
import { UseIsSeller } from '../../utility/useIsSeller';

const SellerRtoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [sellerLoading, isSeller] = UseIsSeller(user?.email)

    if (loading || sellerLoading) {
        return <Loading></Loading>
    }
    if (user && isSeller) {
        return children;
    } else if (!isSeller) {
        return <div className='flex justify-center items-center bg-red-300 text-red-700 min-h-screen font-bold'>
            <h1 className='text-4xl'>UnAuthorized Access</h1>
        </div>
    }
};

export default SellerRtoute;