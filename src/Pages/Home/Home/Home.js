import React from 'react';
import { pageTitle } from '../../../utility/pageTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    // page title
    pageTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;