import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Addservice = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStroageKey = `537637e3061760d1ac5879c84a4a06d9`;

    const onSubmit = async data => {

         // // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStroageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.Specialty,
                        img: img
                    }
                     // console.log("doctor object ", doctor);

                }
                 // console.log("result : ", result);
            })

    }

    return (
        <div className=''>
            <h2 className='text-2xl'>add a new product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input
                        type="name"
                        placeholder="Enter Your Name"
                        className="input input-bordered w-full max-w-xs"
                        autoComplete='off'
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span
                            className="label-text-alt text-red-500">
                            {errors.name.message}
                        </span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Enter Vaild Email Address'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.email?.type === 'required' && <span
                            className="label-text-alt text-red-500">
                            {errors.email.message}
                        </span>}
                        {errors.email?.type === 'pattern' && <span
                            className="label-text-alt text-red-500">
                            {errors.email.message}
                        </span>}

                    </label>
                </div>

    
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>

                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        autoComplete='off'
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span
                            className="label-text-alt text-red-500">
                            {errors.name.message}
                        </span>}
                    </label>
                </div>

                <input className='btn w-full mt-10 max-w-xs text-white' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default Addservice;