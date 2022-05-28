import React from 'react';
import icon01 from '../../../images/servicesIcon/icon-01.png';
import icon02 from '../../../images/servicesIcon/icon-02.png';
import icon03 from '../../../images/servicesIcon/icon-03.png';
import icon04 from '../../../images/servicesIcon/icon-04.png';
import icon05 from '../../../images/servicesIcon/icon-05.png';
import icon06 from '../../../images/servicesIcon/icon-06.png';
import ServiceOfferedCard from './ServiceOfferedCard';
import serviceOfferBGI from '../../../images/servicesIcon/serviceOffer.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='lg:h-screen flex content-center items-center'>
            <div className='lg:p-5 grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div className='p-24'>
                    <ServiceOfferedCard textDirection='text-right' flexDirection='flex-row-reverse' cardTitle="bolts" cardBody="A bolt is a form of threaded fastener with an external male thread requiring a matching pre-formed female thread such as a nut" img={icon01}></ServiceOfferedCard>
                    <ServiceOfferedCard textDirection='text-right' flexDirection='flex-row-reverse' cardTitle="Drill Bit" cardBody="Drills are cutting tools used to remove material to create holes, almost always of circular cross-section." img={icon02}></ServiceOfferedCard>
                    <ServiceOfferedCard textDirection='text-right' flexDirection='flex-row-reverse' cardTitle="clamp" cardBody="A clamp is a fastening device used to hold or secure objects tightly together to prevent movement or separation through the application of inward pressure" img={icon03}></ServiceOfferedCard>
                </div>
                {/* <div style={{
                    background: `url(${serviceOfferBGI})`,
                    backgroundSize: 'cover',
                    // opacity: '0.3',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }} className='p-24 my-[-60px] bg-green-200 text-center flex flex-col justify-around'>
                    <h2 className='my-4'>Serivec We</h2>
                    <h1 className='my-4 text-6xl'>Offered</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam eius pariatur asperiores neque cum, porro voluptatum impedit non labore. Explicabo, sequi nam libero doloremque ut est dolores accusantium reiciendis!</p>
                    <button className='my-6 btn btn-outline btn-primary w-1/2 mx-auto'>View all the service</button>
                </div> */}
                <div className="hero p-24 my-[-60px] shadow-lg" style={{ backgroundImage: `url(${serviceOfferBGI})`, opacity: '0.7', }}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-red-500 text-5xl font-bold">Offered</h1>
                            <p className="mb-5">Our solutions for business process improvement support your employees, partners and customers in their daily activities. This enables your teams to do the right ..!</p>
                            {/* <div className="my-10 grid grid-flow-col gap-5 text-center auto-cols-max">
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{"--value":10}}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{"--value":10}}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{"--value":24}}></span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{"--value":55}}></span>
                                    </span>
                                    sec
                                </div>
                            </div> */}
                            <Link  to='/tools' className="btn btn-primary">purchase</Link>
                        </div>
                    </div>
                </div>
                <div className='p-24'>
                    <ServiceOfferedCard cardTitle="nail gun" cardBody="The best nail gun for home use is the CRAFTSMAN Cordless Brad Nailer Kit. This cordless brad nailer removes the hassle of purchasing an air compressor by utilizing rechargeable" img={icon05}></ServiceOfferedCard>
                    <ServiceOfferedCard cardTitle="glue gun" cardBody="Includes 2 sticks · Ideal for metal, glass, wood and other surfaces · Insulated nozzle · Full-sized glue gun has a comfort grip ·" img={icon04}></ServiceOfferedCard>
                    <ServiceOfferedCard cardTitle="Hatori" cardBody="Hatori is an adult man with a rather tall stature, and muscular yet slender build. He is mentioned to be very handsome by the people" img={icon06}></ServiceOfferedCard>
                </div>

            </div>
        </div>
    );
};

export default Services;