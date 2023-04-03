import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-between md:px-20 md:py-3 bg-slate-700 items-center">
            <h1 className="text-lg md:text-2xl font-bold text-slate-100 font-serif">Meal<span className="text-amber-400">db</span></h1>
            <div className="flex">
            <input className="w-16 md:w-80  py-1 px-1 sm:px-2 rounded md:mr-10 outline-none text-base font-semibold" type="text" placeholder="Search food..."/>
            <ul className="text-base text-amber-400 font-semibold flex gap-8">
                <Link to="/">Home</Link>
                <Link to="/foods">Foods</Link>
                <Link to="/order">Order</Link>
                <Link to="/contract">Contract</Link>
            </ul>
            </div>
        </nav>
    );
};

export default Header;