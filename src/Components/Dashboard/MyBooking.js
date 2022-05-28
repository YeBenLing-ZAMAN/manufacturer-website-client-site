import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyBookingRow from './MyBookingRow';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyBooking = () => {
    const [user] = useAuthState(auth);
    // const [products, setProducts] = useState([]);\
    const [deletProduct, setDeleteProduct] = useState(null);
    const navigate = useNavigate();
    console.log(user);
    const email = user.email;
    /*   useEffect(() => {
          async function fetchMyAPI() {
              if (true) {
                  await fetch(`http://localhost:5000/booking?user=${user.email}`, {
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
          }
          fetchMyAPI();
      }, [user]) */

    const { data: products, isLoading, refetch } = useQuery(['products', email], () => fetch(`http://localhost:5000/booking?user=${email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accesstoken');
            navigate('/');
            console.log("problem found");
        } else if (res.status)
            return res.json()
    }));

    if (isLoading) {
        return <Loading />
    }

    console.log(products);

    return (
        <div>
            <h2 className='text-xl text-right px-5 py-2'>Your Total Orde : {products?.length}</h2>
            <div class="overflow-x-auto p-3">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>apiece</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Order Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            products?.map((a, index) => <MyBookingRow
                                key={a._id}
                                refetch={refetch}
                                index={index}
                                a={a}
                                setDeleteProduct={setDeleteProduct}
                            ></MyBookingRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deletProduct && <DeleteConfirmModal
            deletProduct={deletProduct}
            refetch={refetch}
            setDeleteProduct={setDeleteProduct}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default MyBooking;