import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
    return (
    <DashboardContent>
        <Outlet></Outlet>
    </DashboardContent>
    );
};

export default Dashboard;