import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyBooking = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    console.log(user);
    useEffect(() => {
        if (true) {
            fetch(`http://localhost:5000/booking?user=${user.email}`, {
                method: "GET",
                headers: {
                    //    bareer token dite hobe 
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => {
                    console.log("res", res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accesstoken');
                        navigate('/');
                        console.log("problem found");
                    } else if (res.status)
                        return res.json()
                })
                .then(data => setProducts(data))
        }
    }, [user])
    console.log(products);
    return (
        <div>
            <h2 className='text-xl text-right px-5 py-2'>Your padding order remind: {products?.length}</h2>
            <div class="overflow-x-auto p-3">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Order Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            products?.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a?.product?.name}</td>
                                <td>{a?.product?.price}</td>
                                <td>{a.quantity}</td>
                                <td>dite hhobe</td>
                                <td>
                                    {(a.price && !a.paid) || <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {
                                        (a.price && a.paid) && <div>
                                            <p> <span className='text-red-500'>paid</span></p>
                                            <p className='text-green-500'>Transaction ID: <span>{a.transactionId}</span></p>
                                        </div>
                                    }
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-warning'>Cancel</button></Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;