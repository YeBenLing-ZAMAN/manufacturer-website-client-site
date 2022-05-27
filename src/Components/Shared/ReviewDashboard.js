import React from 'react';

const ReviewDashboard = ({r, index}) => {
    return (
        <div className='my-4 p-2 border-2'>
            <h1>Comment : {index + 1}</h1>
            <hr />
            <p className='mt-4'>{r.review}</p>
            <p className='mt-4'>your pervious rating : {r.rating} Star</p>
        </div>
    );
};

export default ReviewDashboard;