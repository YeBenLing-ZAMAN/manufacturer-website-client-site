import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletProduct, setDeleteProduct, refetch }) => {
    
    console.log(deletProduct);
    const { product ,_id} = deletProduct;
    const { name } = product;

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/bookingitmes/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`order of ${name} is deleted`);
                    refetch();
                }
            })

        setDeleteProduct(null);
    }
    return (
        <div>


            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure to delete {name} this product</h3>
                    <p class="py-4">if your confirm then press delete button otherwise press cancel</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-warning'>Confirm Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-info">Canecl</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;