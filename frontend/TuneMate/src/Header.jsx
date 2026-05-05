import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1><Link to="/">TuneMate</Link></h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    );
}