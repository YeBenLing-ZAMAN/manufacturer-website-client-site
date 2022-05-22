import React from 'react';
import icon01 from '../../../images/servicesIcon/icon-01.png';

const Services = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div>
                <div className='flex'>
                    <img src={icon01} alt="" />
                    <div>
                        <h2 className='text-bule-500'>boiller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={icon01} alt="" />
                    <div>
                        <h2 className='text-bule-500'>boiller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={icon01} alt="" />
                    <div>
                        <h2 className='text-bule-500'>boiller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Serivec We</h2>
                <h1 className='text-3xl'>Offered</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam eius pariatur asperiores neque cum, porro voluptatum impedit non labore. Explicabo, sequi nam libero doloremque ut est dolores accusantium reiciendis!</p>
                <button className='btn btn-primary'>View all the service</button>
            </div>
            <div>
                <div className='flex'>
                    <img src={icon01} alt="" />
                    <div>
                        <h2 className='text-red-500'>boiller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={icon01} alt="" />
                    <div>
                        <h2 className='text-bule-500'>boiller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={icon01} alt="" />
                    <div>
                        <h2 className='text-bule-500'>boiller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;