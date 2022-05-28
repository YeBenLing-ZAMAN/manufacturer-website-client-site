import React from 'react';
import { toast } from 'react-toastify';

const AdminDeleteComfirmModel = ({ deletProduct, setDeleteProduct, refetch }) => {

     // console.log(deletProduct);
    const { product, _id } = deletProduct;
    const { name, Code } = product;

    const handleDelete = (_id) => {
        fetch(`https://shielded-earth-31322.herokuapp.com/bookingitmes/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                 // console.log(data);
                if (data.deletedCount) {
                    toast.success(`order of ${name} is deleted`);
                    refetch();
                }
            })

        setDeleteProduct(null);
    }
    return (
        <div>
            <h1 className='text-xl font-bold text-center'>Admin your are sure to cancel this product</h1>
            <input type="checkbox" id="admin-delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure to delete {Code} this product</h3>
                    <p class="py-4">if your confirm then press delete button otherwise press cancel</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-warning'>Confirm Delete</button>
                        <label for="admin-delete-confirm-modal" class="btn btn-error">Canecl</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteComfirmModel;