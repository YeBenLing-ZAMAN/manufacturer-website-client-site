import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { img, quantity, price, name, _id } = tool;
    return (
        <div className=''>
            <figure>
                <img src={img} className="pt-2 pl-2" alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <hr />
                <p>brand: power</p>
                <p>product code: { }</p>
                <p>Availability: {quantity} prices</p>
                <hr />
                <p>price: {price}/perPrices</p>
                <Link to={`/tool/${_id}`} className='btn btn-primary'>details</Link>
            </div>
        </div>
    );
};

export default Tool;