import React from 'react';

const ServiceOfferedCard = ({img, flexDirection, textDirection}) => {
    return (
        <div className={`flex ${flexDirection}`}>
                    <img className='p-2' width='80px' height='80px' src={img} alt="" />
                    <div className={`${textDirection}`}>
                        <h2 className=' text-xl font-bold text-bule-500'>boiller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas?</p>
                    </div>
                </div>
    );
};

export default ServiceOfferedCard;