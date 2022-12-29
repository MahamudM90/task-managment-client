import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../src////Pages////Shared////////////Navbar/////Navbar/////Navbar'
import Footer from '../.././src////Pages//////Shared////////////////Footer//////////////////////////////////Footer///Footer'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;