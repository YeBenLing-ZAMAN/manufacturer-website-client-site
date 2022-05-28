import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';


const CheckoutForm = ({ item }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);


    const {useremail, _id} = item;

    const QuantityOfProduct= parseFloat(item?.quantity);
    const priceOfProduct= parseFloat(item?.product?.price);
    const totalPrice= (QuantityOfProduct * priceOfProduct).toFixed(2);

    useEffect(()=>{
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
            },
            body:JSON.stringify({totalPrice})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
                console.log('i am here :',data.clientSecret )
            }
        })
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            // console.log('i am load');
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error){
            setCardError(error.message);
        }else{
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        /* confirm payment  */

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: useremail
                    },
                },
            },
        );

        if(intentError){
            setProcessing(false);
            setCardError(intentError.message);
            console.log('i am here now')
        }else{
            setCardError('');
            setTransactionId(paymentIntent.id);
            // console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed');

            // store payment is database 
            const payment ={
                product: _id,
                transactionId: paymentIntent.id
            }

            // backend update
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json()).then(data => {
                setProcessing(false);
                console.log(data)
            })

        }


    }

    // console.log(cardError);
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-8 ' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 mt-2'>{cardError}</p>
            }
            {
               success && <div className='text-green-500'>
               <p>{success}</p>
               <p>Your transaction ID: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
           </div>
            }
        </div>
    );
};

export default CheckoutForm;