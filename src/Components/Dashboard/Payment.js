import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L149lD3SnCuqPTCwFN97WBrNS1G5KxVBz99upweCfZYoDUtwwidTV54k8YUL2GNYoYv4NJ6dwd3KWD7FsjHgPJ600p4Tkp4aA');

const Payment = () => {
    const { _id } = useParams();

    const url = `https://shielded-earth-31322.herokuapp.com/booking/${_id}`;

    const { data: item, isLoading } = useQuery(['booking', _id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

     // console.log(item);
    const QuantityOfProduct= parseFloat(item?.quantity);
    const priceOfProduct= parseFloat(item?.product?.price);

    const totalPrice= (QuantityOfProduct * priceOfProduct).toFixed(2);

    return (
        <div>
            <div class="card w-50 mx-auto  max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='my-3 text-xl text-center font-bold'>Your order Summary</p>
                    <hr />
                    <p className='text-green-500 font-bold'>your email : {item?.useremail}</p>
                    <h2 class="card-title">pay for Your order <span className='text-red-500'>{item?.product?.name}</span></h2>
                    <p>Your order Quantity is : <span className='text-red-500'>{QuantityOfProduct} piece</span> </p>  
                    <p>price of Pre Piece : <span className='text-red-500'>${priceOfProduct}</span></p>
                    <hr />
                    <p className='my-2 font-bold'>Please Pay total: <span className='text-red-500'>${totalPrice}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm item={item} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;