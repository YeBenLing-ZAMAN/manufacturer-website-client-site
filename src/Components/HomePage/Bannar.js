import React from 'react';
import bannar01 from "../../images/bannar/banner-01.jpg";

const Bannar = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: `url(${bannar01})`}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">High Quality Tools</h1>
                    <p class="mb-5">Sanitary & building material Tools</p>
                    <button class="btn btn-primary">purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;