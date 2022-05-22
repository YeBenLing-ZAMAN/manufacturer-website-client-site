import React from 'react';
import BussniessPart from './BussniessPart';
import project from '../../../images/bussinessIcon/icons8-project-64.png';     
import client from '../../../images/bussinessIcon/icons8-client-64.png';     
import country from '../../../images/bussinessIcon/icons8-country-64.png';     

const BussniessSummary = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3'>
            <BussniessPart cardTitle="Opening Hours" bgClass="font-bold bg-gradient-to-r from-primary to-secondary" img={country}></BussniessPart>
            <BussniessPart cardTitle="Our Location" bgClass="bg-accent" img={client}></BussniessPart>
            <BussniessPart cardTitle="Contact Us" bgClass="font-bold bg-gradient-to-r from-primary to-secondary" img={project}></BussniessPart>
        </div>
    );
};

export default BussniessSummary;