import React from 'react';
import { pageTitle } from '../../../utility/pageTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import Steps from '../Steps/Steps';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    // page title
    pageTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <Steps></Steps>
            <Newsletter></Newsletter>
            <Contact></Contact>

        </div>
    );
};

export default Home;