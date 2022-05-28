import React from 'react';
import { Link } from 'react-router-dom';

const AllBookingProductRow = ({ refetch, index, info, setDeleteProduct}) => {
    const { product, quantity, useremail } = info;
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
                <label for="delete-confirm-modal" class="btn btn-xs btn-info">delivery</label>
                </td>
            <td>
            <label onClick={() => setDeleteProduct(info)} for="admin-delete-confirm-modal" class={info.paid?"btn btn-xs btn-disabled":"btn btn-xs btn-warning"}>Cancel Order</label>
            </td>
        </tr>
    );
};

export default AllBookingProductRow;