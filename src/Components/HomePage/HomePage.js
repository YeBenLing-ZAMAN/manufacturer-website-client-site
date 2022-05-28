import React from 'react';
import Bannar from './Bannar';
import ContactsUs from './ContactsUs';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import BussniessSummary from './Summary/BussniessSummary';
import ToolOnHomePage from './ToolOnHomePage';

const HomePage = () => {
    return (
        <div>
            <Bannar></Bannar>
            <BussniessSummary></BussniessSummary>
            <ToolOnHomePage></ToolOnHomePage>
            <Services></Services>
            <Reviews></Reviews>
            <ContactsUs></ContactsUs>
        </div>
    );
};

export default HomePage;