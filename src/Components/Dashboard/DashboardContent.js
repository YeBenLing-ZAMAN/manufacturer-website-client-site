import React from 'react';
import { NavLink } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const DashboardContent = ({children}) => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div className='drawer-content '>
                <div className='flex items-center justify-around	'>
                    <h2 className='text-purple-500 text-2xl  p-3 text-left lg:text-right'>Dash Board</h2>

                    {/* dashboad sidebar button */}
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content ">
                    {/* <!-- Sidebar content here --> */}
                    <li className='my-1'><NavLink to='/dashboard/addservice'>add service</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/addadmin'>add admin</NavLink></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default DashboardContent;