import React from 'react'
import { Link } from 'react-router-dom';

export default function Items (props) {
    return (
        <>
            <li className='nav-item'>
                <Link className='nav-link' 
                      to={props.firstLink}>
                      {props.firstText}
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' 
                      to={props.secondLink} 
                      onClick={props.onClick}>
                      {props.secondText}
                </Link>
            </li>
        </>
    )
}