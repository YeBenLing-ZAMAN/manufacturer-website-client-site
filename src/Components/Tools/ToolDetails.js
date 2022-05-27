import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ToolDetails = () => {
    const { id } = useParams();
    const [toolDetails, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    console.log(toolDetails)
    const { Code, brand, details, image, min_quantity, name, price, quantity, _id } = toolDetails;

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:5000/tool/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
        setLoading(false);
    }, [id])

    if (loading) {
        return <Loading />
    }

    const onSubmit = async data => {
        console.log(data.quantity);
        console.log(min_quantity);

        if (parseInt(data.quantity) >= parseInt(min_quantity)) {
            const booking = {
                product_id: id,
                quantity: data.quantity,
                useremail: user.email,
                product: toolDetails
            }
            //console.log(booking);
            fetch(' http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);

                    if (data.success) {
                        toast(`product add on your booking list`)
                    } else {
                        toast.error(`some thing is wrong try again letter`)
                        console.log()
                    }
                })
        }else{
            toast.error(`product order Quantity is ${data.quantity} it's less than order minimun quantity ${min_quantity}. so, you should order more`);
        }

    }


    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3 className='text-xl'>{name}</h3>
                <hr />
                <p>brand : {brand}</p>
                <p>product code : {Code}</p>
                <hr />
                <p>Details</p>
                <p>{details}</p>
                <hr />
                <p>Availability : {quantity} apiece</p>
                <p>Minimun Quantity of order : {min_quantity} apiece</p>
                <hr />
                <p>price : ${price}/Apiece</p>
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