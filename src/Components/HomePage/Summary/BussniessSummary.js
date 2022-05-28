import React from 'react';
import BussniessPart from './BussniessPart';
import project from '../../../images/bussinessIcon/icons8-project-64.png';     
import client from '../../../images/bussinessIcon/icons8-client-64.png';     
import country from '../../../images/bussinessIcon/icons8-country-64.png'; 
import contactUsIcone from '../../../images/bussinessIcon/contactusicons.png';    

const BussniessSummary = () => {
    return (
        <>
        <div className='text-center my-10'>
        <h1 className='text-5xl mb-4'>Our Bussniess Trust Us</h1>
        <p>Try to understand user epectation</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-3'>
            <BussniessPart cardTitle="All Over World!" cardBody="you can order anywhere" bgClass="font-bold bg-gradient-to-r from-red-500 to-yellow-500" img={country}></BussniessPart>
            <BussniessPart cardTitle="20k Client" cardBody="client satisfaction is must" bgClass="bg-gradient-to-r from-red-500 to-yellow-500 " img={client}></BussniessPart>
            <BussniessPart cardTitle="3k" cardBody="font-bold Large project handle" bgClass="font-bold bg-gradient-to-r from-red-500 to-yellow-500" img={project}></BussniessPart>
            <BussniessPart cardTitle="Contact Us" cardBody="if you have any qustion please submit form blow" bgClass="font-bold bg-gradient-to-r from-red-500 to-yellow-500" img={contactUsIcone}></BussniessPart>
        </div>
        </>
    );
};

export default BussniessSummary;