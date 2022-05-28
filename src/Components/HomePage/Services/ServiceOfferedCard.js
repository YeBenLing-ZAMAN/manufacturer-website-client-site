import React from 'react';

const ServiceOfferedCard = ({ img, flexDirection, textDirection, cardBody, cardTitle }) => {
    return (
        <div className={`flex ${flexDirection} mt-5`}>
            <div className='p-5'>
                <img src={img} width='200px' height='200px' alt="" />
            </div>
            <div className={`${textDirection}`}>
                <h2 className=' text-xl font-bold text-bule-500'>{cardTitle}</h2>
                <p>{cardBody}</p>
            </div>
        </div>
    );
};

export default ServiceOfferedCard;