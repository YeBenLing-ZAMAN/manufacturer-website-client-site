import React from 'react';
import { Link } from 'react-router-dom';

const AllBookingProductRow = ({ refetch, index, info }) => {
    const { product, quantity, useremail } = info;
    const { Code } = product;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{Code}</td>
            <td>{quantity} apiece</td>
            <td>{useremail}</td>
            <td>
                {(info.price && !info.paid) || <Link to={`/dashboard/payment/${info._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                {
                    (info.price && info.paid) && <div>
                        <p> <span className='text-red-500'>paid</span></p>
                        <p className='text-green-500'>Transaction ID: <span>{info.transactionId}</span></p>
                    </div>
                }
            </td>
            <td><label for="delete-confirm-modal" class="btn btn-xs btn-info">delivery</label></td>
            <td>
                <label for="delete-confirm-modal" class="btn btn-xs btn-warning">Cancel Order</label>
            </td>
        </tr>
    );
};

export default AllBookingProductRow;