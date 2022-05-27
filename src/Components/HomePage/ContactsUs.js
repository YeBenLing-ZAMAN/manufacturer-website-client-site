import React from 'react';
import contactBGI from '../../images/contactus/contactustusBGI.jpg';
import contactside from '../../images/contactus/contactussidephoto.jpg';
import { useForm } from 'react-hook-form';

const ContactsUs = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);
    }


    return (
        <div style={{
            background: `url(${contactBGI})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        }} className='h-screen flex flex-col justify-center items-center py-20 px-3'>
            <div className=' mb-14'>
                <h3 className='text-2xl font-blod uppercase text-primary text-center'>Contact Us</h3>
                <p className='text-5xl text-white text-center'>Stay connected with us</p>
            </div>
            <div className='flex flex-col w-full lg:w-1/2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email Address" className="my-2 input input-bordered input-success w-full max-w-full"  {...register("email", {
                            required: {
                                value: true,
                                message: 'email is Required'
                            }
                        })} />
                    <input type="text" placeholder="Mobile Numebr" className="my-2 input input-bordered input-success w-full max-w-full" {...register("mobile", {
                            required: {
                                value: true,
                                message: 'mobile is Required'
                            }
                        })}/>
                    <input type="text" placeholder="Subject" className="my-2 input input-bordered input-success w-full max-w-full" {...register("subject", {
                            required: {
                                value: true,
                                message: 'subject is Required'
                            }
                        })}/>
                    <textarea className="my-2 textarea textarea-success w-full max-w-full" placeholder="Your Message" {...register("message", {
                            required: {
                                value: true,
                                message: 'your message  is Required'
                            }
                        })}></textarea>
                    <input className='btn btn-primary w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactsUs;