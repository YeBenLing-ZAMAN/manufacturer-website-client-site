import React from 'react';
import Bannar from './Bannar';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import BussniessSummary from './Summary/BussniessSummary';

const HomePage = () => {
    return (
        <div>
            <Bannar></Bannar>
            <BussniessSummary></BussniessSummary>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;