import React from 'react';
import { pageTitle } from '../../../utility/pageTitle';

const Dashboard = () => {
    // page title 
    pageTitle("Dashboard");
    return (
        <div>
            <h2 className="text-3xl font-bold">Dashbaord</h2>
        </div>
    );
};

export default Dashboard;