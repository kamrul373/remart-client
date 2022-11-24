import React from 'react';
import { pageTitle } from '../../../utility/pageTitle';
import Banner from '../Banner/Banner';

const Home = () => {
    // page title
    pageTitle("Home");
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;