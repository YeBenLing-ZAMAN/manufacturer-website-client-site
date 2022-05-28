import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool, refetch }) => {
     // console.log(tool)
     const {  Code, brand, details, image,min_quantity,name,price,quantity,_id } = tool;
    return (
        <div className='w-96 bg-base-100 shadow-xl'>
            <figure>
                <img width={400} height={400} src={image} className="p-2" alt="Album" />
            </figure>
            <div className="card-body px-8 pt-2">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <hr />
                <p>brand: {brand}</p>
                <p>product code: { Code}</p>
                <hr />
                <hr />
                <p>Availability: {quantity} piece</p>
                <p>Minimun Quantity of order: {min_quantity} apiece</p>
                <hr />
                <p>price: {price}/perApiece</p>
                <Link to={`/tool/${_id}`} className='btn btn-primary'>details</Link>
            </div>
        </div>
    );
};

export default Tool;