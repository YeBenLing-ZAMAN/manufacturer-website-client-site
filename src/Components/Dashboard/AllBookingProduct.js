import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminDeleteComfirmModel from './AdminDeleteComfirmModel';
import AdminDeliveryProductConfirmModel from './AdminDeliveryProductConfirmModel';
import AllBookingProductRow from './AllBookingProductRow';

const AllBookingProduct = () => {
    const [deletProduct, setDeleteProduct] = useState(null);
    const [deliveryProduct, setDeliveryProduct] = useState(null);

    const url = `http://localhost:5000/allbooking`;

    const { data: allbookinglists, isLoading, refetch } = useQuery('allbookinglists', () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    //  // console.log(allbookinglists);
    return (
        <div>
            <h2 className='text-xl text-right px-5 py-2'>Total Order Submited : {allbookinglists?.length}</h2>
            <div class="overflow-x-auto p-3">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product code</th>
                            <th>Order quantity</th>
                            <th>Buyer info</th>
                            <th>payment</th>
                            <th>Delivery</th>
                            <th>Order Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            allbookinglists?.map((info, index) => <AllBookingProductRow
                                key={info._id}
                                refetch={refetch}
                                index={index}
                                info={info}
                                setDeleteProduct={setDeleteProduct}
                                setDeliveryProduct={setDeliveryProduct}
                            ></AllBookingProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletProduct && <AdminDeleteComfirmModel
                deletProduct={deletProduct}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}
            ></AdminDeleteComfirmModel>}

            {deliveryProduct && <AdminDeliveryProductConfirmModel
                deliveryProduct={deliveryProduct}
                refetch={refetch}
                setDeliveryProduct={setDeliveryProduct}
            ></AdminDeliveryProductConfirmModel>}
        </div>
    );
};

export default AllBookingProduct;