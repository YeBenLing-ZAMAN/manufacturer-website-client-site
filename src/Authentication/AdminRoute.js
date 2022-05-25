import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminRoute = () => {
    const location = useLocation();
    const admin = false;
    if (!admin) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return <Outlet/>;
};

export default AdminRoute; 