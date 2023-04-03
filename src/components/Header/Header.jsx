import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-between md:px-20 md:py-2 bg-slate-700 items-center">
            <h1 className="text-lg md:text-2xl font-bold text-slate-100">Meal<span className="text-amber-400">db</span></h1>
            <ul className="text-base text-amber-400 font-semibold flex gap-8">
                <Link to="/">Home</Link>
                <Link to="/foods">Foods</Link>
                <Link to="/order">Order</Link>
                <Link to="/contract">Contract</Link>
            </ul>
        </nav>
    );
};

export default Header;