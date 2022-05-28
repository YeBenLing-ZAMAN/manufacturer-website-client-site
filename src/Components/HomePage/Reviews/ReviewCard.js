import React from 'react';
import avatar from "../../../images/reviews/people1.png";


const ReviewCard = ({ review }) => {
    const ratingStar = parseInt(review.rating);
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="rounded-full ring ring-primary ring-offset-base-100 w-16 mr-5">
                            <img className='' src={avatar} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>{review.name}</h4>
                        {/* <p className=''>{review.location}</p> */}
                    </div>
                </div>
                <div className="rating">
                    {
                        ratingStar === 1 && <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    }
                    {
                        ratingStar === 2 && <>
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </>
                    }
                    {
                        ratingStar === 3 && <>
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </>
                    }
                    {
                        ratingStar === 4 && <>
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </>
                    }
                    {
                        ratingStar === 5 && <>
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </>
                    }
                </div>
                <p>{review.review}</p>
            </div>
        </div>
    )
};

export default ReviewCard;