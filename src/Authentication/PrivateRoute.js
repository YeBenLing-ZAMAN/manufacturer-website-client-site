import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading';
import auth from '../firebase.init';

const PrivateRoute = () => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return <Outlet/>;
};

export default PrivateRoute; 