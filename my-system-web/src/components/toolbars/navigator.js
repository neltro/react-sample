import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../user/login';
import Toolbar from './toolbar';

export default function Navigator () {
    const logout = () => {
        sessionStorage.removeItem('token');
        return(
            <>
                <Login />
            </>
            )
    };
    const links = () => {
        const token = sessionStorage.getItem('token');
        console.log(token);
    if (token){
            return (
                <>
                    <li className='nav-item'>
                    <Link className='nav-link' to={'/'} onClick={logout} >Logout</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <Toolbar />
                </>
            )
        }
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
                <div className='container'>
                    <Link className='navbar-brand' to={'/'}>My System</Link>
                    <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                        <ul className='navbar-nav ml-auto'>
                            {links()}
                        </ul>
                    </div>
                </div>
            </nav>
      </>
    )
}