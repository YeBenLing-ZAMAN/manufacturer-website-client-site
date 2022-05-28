import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyBookingRow = ({ a, index, refetch, setDeleteProduct }) => {
    const { product, quantity, _id } = a;
    const { name, price } = product;
    const QuantityOfProduct= parseFloat(quantity);
    const priceOfProduct= parseFloat(price);

    const totalPrice= (QuantityOfProduct * priceOfProduct).toFixed(2);

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>$ {price}</td>
            <td>{quantity}/piece</td>
            <td>$ {totalPrice}</td>
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
                <label onClick={() => setDeleteProduct(a)} for="delete-confirm-modal" class="btn btn-xs btn-warning">Cancel Order</label>
            </td>
        </tr>
    );
};

export default MyBookingRow;