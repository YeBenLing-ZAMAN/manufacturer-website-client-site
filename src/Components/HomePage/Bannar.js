import React from 'react';
import { Link } from 'react-router-dom';
import bannar01 from "../../images/bannar/banner-01.jpg";

const Bannar = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bannar01})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">High Quality Tools</h1>
                    <p className="mb-5">Sanitary & building material Tools</p>
                    <Link to='/tools' className="btn btn-primary">purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Bannar;