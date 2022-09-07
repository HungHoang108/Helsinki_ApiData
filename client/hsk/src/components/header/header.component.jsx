import React from "react";
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './header.styles.css'


function Header(){

    return (
        <div className="header-box">
        <div className="header header-fixed">
            <div className="navigation">
                <Link className="route" to='/'>
                Home
                </Link>
            </div>
            <div className="navigation">
                <Link className="route" to='/'>
                Place
                </Link>
            </div>
            <div className="navigation">
                <Link className="route" to='/events'>
                  Event
                </Link>
            </div>
            <div className="navigation">
                <Link className="route" to='/activities'>
                  Activity
                </Link>
            </div>
            {/* <div className="navigation">
                <Link className="route" to='/favourate'>
                  Favourate
                </Link>
            </div> */}
        </div>
            {/* <div className="header-signup">
                <Link className="route" to='/signup'>
                  SIGN UP
                </Link>
            </div> */}
            <Outlet />
        </div>
    )
}

export default Header; 