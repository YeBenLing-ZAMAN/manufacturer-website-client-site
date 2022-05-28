import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import quoteIcon from '../../images/reviews/quote.svg';
import ReviewCard from '../HomePage/Reviews/ReviewCard';


const SeeReview = () => {

    const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch(`http://localhost:5000/allreviews`).then(res => res.json()));
    if (isLoading) {
        <Loading />
    }

    return (
        <section className='p-10'>
            <div className='flex justify-around items-center'>
                <div>
                    <div><h4 className='text-xl text-primary font-bold'>reviews</h4></div>
                    <h2 className='text-3xl'>What Our Dealer Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quoteIcon} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                  reviews?.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default SeeReview;