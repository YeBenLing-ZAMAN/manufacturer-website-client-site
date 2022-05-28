import React from 'react';
import { toast } from 'react-toastify';

const AdminDeliveryProductConfirmModel = ({ setDeliveryProduct, deliveryProduct, refetch }) => {


    console.log(deliveryProduct);
    const { product, _id, useremail, quantity } = deliveryProduct;
    const { Code, price } = product;

    const handleDelivery = (_id) => {

        const delivedProduct = {
            bookingId: _id,
            useremail: useremail,
            quantity: quantity,
            Code: Code,
            price: price
        }

        fetch(`http://localhost:5000/updatebooking/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            },
            body: JSON.stringify(delivedProduct)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                toast.success(`product of ${Code} is delived`);
                refetch();
            }
        })

        setDeliveryProduct(null);
    }

    return (
        <div>
            <h1 className='text-xl font-bold text-center'>Product Delivery</h1>
            <input type="checkbox" id="admin-delivery-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">product code is {Code}</h3>
                    <p class="py-4">product has been delived then press Confirm delivery button, other wise press Cancel Button</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelivery(_id)} className='btn btn-info'>Confirm Deliery</button>
                        <label for="admin-delivery-confirm-modal" class="btn btn-error">Canecl</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminDeliveryProductConfirmModel;