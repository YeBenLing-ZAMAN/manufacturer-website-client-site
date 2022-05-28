import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ToolDetails = () => {
    const { id } = useParams();
    // const [toolDetails, setDetails] = useState([]);
    // const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);
    //console.log(toolDetails)

    const url = `http://localhost:5000/tool/${id}`;

    /*  useEffect(() => {
         setLoading(true);
         fetch(url)
             .then(res => res.json())
             .then(data => setDetails(data));
         setLoading(false);
     }, [id]) */

    const { data: toolDetails, isLoading, refetch } = useQuery('toolDetails', () => fetch(url).then(res => res.json()));
    // const { Code, brand, details, image, min_quantity, name, price, quantity, _id } = toolDetails;

    if (isLoading ||loading) {
        return <Loading />
    }

    const onSubmit = async data => {
        console.log(data.quantity);
        console.log(toolDetails?.min_quantity);

        if (parseInt(data.quantity) >= parseInt(toolDetails?.min_quantity) && parseInt(data.quantity) <= parseInt(toolDetails?.quantity)) {
            const booking = {
                product_id: id,
                quantity: data.quantity,
                useremail: user.email,
                product: toolDetails
            }
            const availabeQuantity = parseInt(toolDetails?.quantity);
            const orderQuantity = parseInt(data?.quantity);
            console.log("order quantity", orderQuantity);
            console.log("avaiable quantity", availabeQuantity);
            const updateQuantity = (availabeQuantity - orderQuantity).toString();

            //console.log(booking);
            fetch(' http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);

                    console.log(updateQuantity);
                    console.log(typeof (updateQuantity));
                    const UQ = {
                        quantity: updateQuantity
                    }

                    if (data.success) {
                        toast(`product add on your booking list`);
                        /* send a post request for update DataBase */
                        fetch(`http://localhost:5000/addbooking/${toolDetails._id}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                            },
                            body: JSON.stringify(UQ)
                        }).then(res => res.json()).then(data => {
                            // setProcessing(false);
                            console.log('update', data)
                            refetch();
                        })

                    } else {
                        toast.error(`some thing is wrong try again letter`);
                        console.log();
                    }
                })
        } else if (parseInt(data.quantity) > parseInt(toolDetails?.quantity)) {
            toast.error(`product order Quantity is ${data.quantity} it's more then available quantity ${toolDetails?.quantity}. so, you should order less`);
        }
        else {
            toast.error(`product order Quantity is ${data.quantity} it's less than order minimun quantity ${toolDetails?.min_quantity}. so, you should order more`);
        }

    }


    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center'>
            <div>
                <img src={toolDetails?.image} alt="" />
            </div>
            <div>
                <h3 className='text-xl'>{toolDetails?.name}</h3>
                <hr />
                <p>brand : {toolDetails?.brand}</p>
                <p>product code : {toolDetails?.Code}</p>
                <hr />
                <p>Details</p>
                <p>{toolDetails?.details}</p>
                <hr />
                <p>Availability : {toolDetails?.quantity} apiece</p>
                <p>Minimun Quantity of order : {toolDetails?.min_quantity} apiece</p>
                <hr />
                <p>price : ${toolDetails?.price}/Apiece</p>
                <hr />

                <div className='my-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor='buy' className="label">
                                <span className="label-text">Quantity to Buy</span>
                            </label>
                        </div>
                        <input id='' className='input input-bordered input-primary w-24' type="number" {...register("quantity")} />
                        <input className='btn btn-primary ml-5' type="submit" value='prachers' />
                        {/* ekhkhane error ta ami show koramo */}
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ToolDetails;