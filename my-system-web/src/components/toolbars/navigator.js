import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '../toolbars/toolbar';

export default function Navigator () {
    return (
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
            <div className='container'>
                <Link className='navbar-brand' to={'/'}>My System</Link>
                <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                    <ul className='navbar-nav ml-auto'>
                        <Toolbar />
                    </ul>
                </div>
            </div>
        </nav>
    )
}