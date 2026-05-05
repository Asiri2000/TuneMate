import React from 'react';

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>TuneMate</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );

    
}