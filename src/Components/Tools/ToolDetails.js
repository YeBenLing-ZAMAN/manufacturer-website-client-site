import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ToolDetails = () => {
    const { id } = useParams();
    const [toolDetails, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
 

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
        // console.log(data.quantity);
        const booking = {
            product_id: id,
            quantity: data.quantity,
            useremail:user.email
        }
        //console.log(booking);
    }

    console.log(toolDetails)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={toolDetails.img} alt="" />
            </div>
            <div>
                <h3 className='text-xl'>{toolDetails.name}</h3>
                <hr />
                <p>Brand:</p>
                <p>Supplier: {toolDetails.supplier}</p>
                <p>product code:{toolDetails._id}</p>
                <p>price: {toolDetails.price}</p>
                <p>Avaible Quantity: {toolDetails.quantity}</p>
                <hr />


                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="number" {...register("quantity")} />
                    <input className='btn btn=primary' type="submit" value='prachers' />
                    {/* ekhkhane error ta ami show koramo */}
                </form>


            </div>
        </div>
    );
};

export default ToolDetails;