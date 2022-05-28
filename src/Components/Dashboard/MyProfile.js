import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loading/>
    }


    return (
        <div className='p-2'>
            <h1 className='text-3xl'>Name: {user?.displayName}</h1>
            <p className='text-2xl'>Email: {user?.email}</p>
            <div>
                <h1 className='text-center mt-4 text-4xl'></h1>
            </div>
        </div>
    );
};

export default MyProfile;