import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { signOut } from 'firebase/auth';
import { Link, Navigate, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        Navigate('/');
    };

    const menuItems = <>
        <li className='my-2 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/home'>Home</NavLink></li>
        <li className='my-2 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/tools'>Tools</NavLink></li>
        <li className='my-2 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/review'>Reviews</NavLink></li>
        <li className='my-2 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/contact'>Contact</NavLink></li>
        <li className='my-2 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/about'>About</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl ">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <li className="navbar-end">
                {user ? <></> : <Link to='/login' className="btn btn-primary">login/signup</Link>}</li>

            {
                user && <li class="dropdown dropdown-hover dropdown-end">
                    <label tabindex="0" class="btn m-1">{user?.displayName?.split(" ")[0]} </label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='useprofile'>Your profile</Link></li>
                        <li><NavLink to='dashboard'>Dash Board</NavLink></li>
                        <li><button onClick={logout} className="btn btn-ghost">Sign Out</button></li>

                    </ul>
                </li>
            }
        </div>
    );
};

export default Navbar;