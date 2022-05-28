import React from 'react';
import { Link } from 'react-router-dom';

const AllBookingProductRow = ({ refetch, index, info, setDeleteProduct,setDeliveryProduct }) => {
    const { product, quantity, useremail} = info;
    const { Code } = product;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{Code}</td>
            <td>{quantity} apiece</td>
            <td>{useremail}</td>
            <td>
                {(!info.paid) && <Link to={``}><button className='btn btn-xs btn-success'>padding</button></Link>}
                {
                    (info.paid) && <div>
                        <p> <span className='text-red-500'>paid</span></p>
                        <p className='text-green-500'>Transaction ID: <span>{info.transactionId}</span></p>
                    </div>
                }
            </td>
            <td>
                <label onClick={() => setDeliveryProduct(info)} for="admin-delivery-confirm-modal" class={info.delivery ? "btn btn-xs btn-disabled" : "btn btn-xs btn-info"}>Delivery Padding</label>
            </td>
            <td>
                <label onClick={() => setDeleteProduct(info)} for="admin-delete-confirm-modal" class={info.paid ? "btn btn-xs btn-disabled" : "btn btn-xs btn-warning"}>Cancel Order</label>
            </td>
        </tr>
    );
};

export default AllBookingProductRow;