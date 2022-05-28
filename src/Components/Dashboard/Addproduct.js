import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Addproduct = () => {
    const [imageURL, setImageURL] = useState("");
    //  // console.log(imageURL);
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = async data => {
         // console.log(data);
        const productData = {
            ...data,
            image: imageURL,
        }

         // console.log('product-data', productData);


        /* post request ta handle  korte hobe  */
        fetch(` https://shielded-earth-31322.herokuapp.com/addproduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('product added successfully');
                    setImageURL("");
                    reset();
                } else {
                    toast.error("Failed to Add product");
                }
                 // console.log("productDetails : ", inserted)
            })

    }



    /* image upload handle */
    const handleUploadImage = event => {
        setLoading(true);
         // console.log(event.target.files[0]);
        const image = event.target.files[0];
        const formData = new FormData();

        formData.set("image", image);

        const url = `https://api.imgbb.com/1/upload?key=537637e3061760d1ac5879c84a4a06d9`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // // console.log(data);
                 // console.log('hardcodeurl', data.data.display_url);
                setImageURL(data.data.display_url);
                setLoading(false);

            }).catch((error) => {
                 // console.log(error);
                toast.error(`some thing is wrong, so image isn't store is DB`)
            })
    }

    return (
        <div >
            <h1 className='text-3xl text-center my-3'>Add product on your Tools list</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-start'>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='brandName' className="label">
                            <span className="label-text">Brand Name</span>
                        </label>

                        <input id='brandName' className="input input-bordered w-full max-w-xs" type="text" name="brand" {...register('brand')} />

                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='productCode' className="label">
                            <span className="label-text">Product Code</span>
                        </label>

                        <input id='productCode' className="input input-bordered w-full max-w-xs" type="text" name="email" {...register('Code')} />

                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 justify-around items-center'>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='productName' className="label">
                            <span className="label-text">Product Name</span>
                        </label>

                        <input id='productName' className="input input-bordered w-full max-w-xs" type="text" name="name" {...register('name')} />

                    </div>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='quantity' className="label">
                            <span className="label-text">product Availability Quantity</span>
                        </label>

                        <input id='quantity' className="input input-bordered w-full max-w-xs" type="number" name="quantity" {...register('quantity')} />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 justify-around items-center'>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='min-product' className="label">
                            <span className="label-text">Minimum Product of Order</span>
                        </label>

                        <input id='min-product' className="input input-bordered w-full max-w-xs" type="number" name="min_quantity" {...register('min_quantity')} />
                    </div>
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='price' className="label">
                            <span className="label-text">Per/pices Price of Product</span>
                        </label>
                        <input id='price' className="input input-bordered w-full max-w-xs" type="number" step="any" name="price" {...register('price')} />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='details' className="label">
                            <span className="label-text">Details</span>
                        </label>

                        {/* <input type="textarea" className="input input-bordered w-full max-w-xs" name="review" {...register('review')} required /> */}
                        <textarea id='details' className="my-2 textarea textarea-success w-full max-w-full" placeholder="Product decripcation" {...register("details", {
                            required: {
                                value: true,
                                message: 'details Required'
                            }
                        })} ></textarea>
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label htmlFor='photo' className="label">
                            <span className=" w-full max-w-xs mx-auto btn btn-outline btn-info label-text">Add Product Photo</span>
                        </label>

                        <input
                            type="file"
                            id='photo'
                            className="input input-bordered w-full max-w-xs hidden"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                            onChange={handleUploadImage}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span
                                className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>}
                        </label>
                    </div>
                </div>
                <div className='flex items-center justify-around'>

                    <input className='btn w-full mt-10 max-w-xs text-white' type="submit" value="product add" disabled={!imageURL ? true : false} />
                </div>
            </form>
        </div>
    );
};

export default Addproduct;