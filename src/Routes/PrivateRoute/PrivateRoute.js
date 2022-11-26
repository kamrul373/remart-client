import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../context/AuthContextProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    // console.log("private", loading)
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;
