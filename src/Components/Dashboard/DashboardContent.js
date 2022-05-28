import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashboardContent = ({ children }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin);
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
                    <li className='my-1'><NavLink to='/dashboard/mybooking'>My Booking</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/addreview'>My Review</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/myprofile'>My profile</NavLink></li>
                    {
                        admin && <>
                            <li className='my-1'><NavLink to='/dashboard/alluser'>All User</NavLink></li>
                            <li className='my-1'><NavLink to='/dashboard/allBookingList'>ALL Booking List</NavLink></li>
                            <li className='my-1'><NavLink to='/dashboard/addproduct'>Add product</NavLink></li>
                            <li className='my-1'><NavLink to='/dashboard/allreview'>All Review</NavLink></li>
                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default DashboardContent;