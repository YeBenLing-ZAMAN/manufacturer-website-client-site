import React from 'react';
import ReviewCard from './ReviewCard';
import quoteIcon from '../../../images/reviews/quote.svg';
import people1 from "../../../images/reviews/people1.png";
import people2 from "../../../images/reviews/people2.png";
import people3 from "../../../images/reviews/people3.png";
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch(`http://localhost:5000/allreviews`).then(res => res.json()));

    if (isLoading) {
        <Loading />
    }

    //   const reviews =[
    //     {
    //         id:1,
    //         name:"winson Herry",
    //         review:' ',
    //         location:"New York",
    //         img:people1

    //     },
    //     {
    //         id:2,
    //         name:"winson Herry",
    //         review:' ',
    //         location:"New York",
    //         img:people2

    //     },
    //     {
    //         id:3,
    //         name:"winson Herry",
    //         review:' ',
    //         location:"New York",
    //         img:people3

    //     },
    // ]

     // console.log(reviews);
    return (
        <section className='my-28 p-10'>
            <div className='flex justify-around items-center'>
                <div>
                    <div><h4 className='text-xl text-primary font-bold'>Testimonial</h4></div>
                    <h2 className='text-3xl'>What Our Dealer Says</h2>
                    <div></div>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quoteIcon} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.slice(0, 3).map((review,index) => <ReviewCard key={index} review={review}></ReviewCard>)
                }
            </div>
            <div className='text-center my-10'>
                <Link to='/seereviews' className='btn btn-outline btn-primary'>See More review</Link>
            </div>
        </section>
    );
};

export default Reviews;