import React from "react";
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './header.styles.css'


function Header(){

    return (
        <Fragment>
        <div className="header">
            <div className="navigation">
                <Link to='/'>
                Home
                </Link>
            </div>
            <div className="navigation">
                <Link to='/'>
                Place
                </Link>
            </div>
            <div className="navigation">
                <Link to='/events'>
                  Event
                </Link>
            </div>
            <div className="navigation">
                <Link to='/activities'>
                  Activity
                </Link>
            </div>
        </div>
            <Outlet />
        </Fragment>
    )
}

export default Header; 