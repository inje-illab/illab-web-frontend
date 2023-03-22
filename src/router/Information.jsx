import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../information/components/nav/Nav';
import Footer from './../information/components/footer/Footer';

const Information = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-6xl mx-auto px-4 py-5">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Information;