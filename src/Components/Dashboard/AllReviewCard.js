import React from 'react';

const AllReviewCard = ({ r, index , onDeletebutton}) => {
    return (
        <div className='my-4 p-2 border-2'>
            <div className='flex items-center justify-between p-2'>
                <p>Comment : {index + 1}</p>
                <button onClick={()=>onDeletebutton(r._id)} className='btn btn-warning btn-xs'>delete</button>
            </div>
            <hr />
            <div className='flex flex-col items-start justify-between p-2'>
                <small>
                    <p><span className='font-bold'>Client :</span> {r.name}</p>
                    <p><span className='font-bold'>Email :</span> {r.email}</p>
                    <p><span className='font-bold'>Review ID :</span> {r._id}</p>
                </small>
            </div>

            <hr />
            <p className='mt-4 text-xl text-green-600'>{r.review}</p>
            <p className='mt-4'>Rating : {r.rating} Star</p>
        </div>
    );
};

export default AllReviewCard;