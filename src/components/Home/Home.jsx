import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Header></Header>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;