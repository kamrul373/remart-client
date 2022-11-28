import React from 'react';
import { pageTitle } from '../../../utility/pageTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';

const Home = () => {
    // page title
    pageTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <Contact></Contact>
        </div>
    );
};

export default Home;