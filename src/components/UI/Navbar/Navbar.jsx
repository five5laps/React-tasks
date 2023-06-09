import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
                <div className="navbar__links">
                    <Link to="/about">About us</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/ip">Check your IP</Link>
                </div>
            </div>
    );
};

export default Navbar;