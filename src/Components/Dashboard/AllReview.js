import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import AllReviewCard from './AllReviewCard';

const AllReview = () => {

    const { data: reviews, isLoading , refetch} = useQuery('review', () => fetch(`http://localhost:5000/allreviews`).then(res => res.json()));


    const onDeletebutton =(id)=>{
         // console.log('delete',id);
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                 // console.log(data);
                if (data.deletedCount) {
                    toast.success(`review is deleted.`);
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className='mt-5 lg:mt-0'>
                <h1 className='text-2xl font-bold mb-2 mx-auto text-center'>All Comment List</h1>
                <div className='p-4'>
                {
                    reviews?.map((r,index)=> <AllReviewCard key={r._id} onDeletebutton={onDeletebutton} index={index} r={r}></AllReviewCard>)
                }
                </div>

            </div>
        </div>
    );
};

export default AllReview;