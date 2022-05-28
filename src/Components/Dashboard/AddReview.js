import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ReviewDashboard from '../Shared/ReviewDashboard';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
     // console.log(user);
    const { register, handleSubmit } = useForm();

    
    const { data: reviews, isLoading , refetch} = useQuery('review', () => fetch(` http://localhost:5000/review?email=${user.email}`).then(res => res.json()));

    //  // console.log(reviews);

    const onSubmit = async data => {
         // console.log(data);
        // // console.log(booking);
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                 // console.log(data);

                if (data.success) {
                    toast(`your review is added`);
                    refetch();
                } else {
                    toast.error(`some thing review is not added`)
                     // console.log()
                }
            })
    }


    if (loading && isLoading) {
        return <Loading />;
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-start mt-5'>
            <div className='w-full max-w-xs mx-auto'>
                <h1 className='text-2xl font-bold mb-2 text-center'>Add your valueable comment</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input className="input input-bordered w-full max-w-xs" type="text" name="firstName" {...register('name')} value={user.displayName} />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input className="input input-bordered w-full max-w-xs" type="text" name="email" {...register('email')} value={user.email} />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>

                        {/* <input type="textarea" className="input input-bordered w-full max-w-xs" name="review" {...register('review')} required /> */}
                        <textarea className="my-2 textarea textarea-success w-full max-w-full" placeholder="type your comment" {...register("review", {
                            required: {
                                value: true,
                                message: 'your revirews is Required'
                            }
                        })} required></textarea>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>

                        <select className="input input-bordered w-full max-w-xs" {...register("rating")}>
                            <option value="1">* star</option>
                            <option value="2">** star</option>
                            <option value="3">*** star</option>
                            <option value="4">**** star</option>
                            <option value="5">***** start</option>
                        </select>
                    </div>

                    <input className='btn w-full mt-10 max-w-xs text-white' type="submit" value="Review add" />
                </form>
            </div>

            {/* previous review */}
            <div className='mt-5 lg:mt-0'>
                <h1 className='text-2xl font-bold mb-2 mx-auto text-center'>Your privous comment</h1>
                <div className='p-4'>
                {
                    reviews?.map((r,index)=> <ReviewDashboard key={r._id} index={index} r={r}></ReviewDashboard>)
                }
                </div>

            </div>

        </div>
    );
};

export default AddReview;