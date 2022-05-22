import React from 'react';
import contactBGI from '../../images/contactus/contactustusBGI.jpg';
import contactside from '../../images/contactus/contactussidephoto.jpg';

const ContactsUs = () => {
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
                <input type="text" placeholder="Email Address" className="my-2 input input-bordered input-success w-full max-w-full" />
                <input type="text" placeholder="Mobile Numebr" className="my-2 input input-bordered input-success w-full max-w-full" />
                <input type="text" placeholder="Subject" className="my-2 input input-bordered input-success w-full max-w-full" />
                <textarea className="my-2 textarea textarea-success" placeholder="Your Message"></textarea>
                <input className='btn btn-primary w-full	' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default ContactsUs;