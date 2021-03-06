import React from 'react';

const BussniessPart = ({img, cardTitle, bgClass,cardBody}) => {
    return (
        <div className={`card lg:card-side shadow-xl p-4 mx-2 my-6 ${bgClass}`}>
                <figure>
                    <img src={img} className="pt-2 pl-2" alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-white">{cardTitle}</h2>
                    <p className='text-white'>{cardBody}</p>
                </div>
            </div>
    );
};

export default BussniessPart;