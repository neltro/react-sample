import React from 'react';
import Login from '../user/login';
import { dashboard } from '../../services/dashboardService';

export default function Dashboard () {
    try{
        const token = sessionStorage.getItem('token');
        if (token === null)
        return (
            <Login />
        )
        let result = {};
        (async () => {
            result = await dashboard(token);
            console.log(result);
        })();
        if (token) {
                return(
                    <div>
                        <h1>Dashboard!</h1>
                    </div>
                ) 
        } else {
            return (
                <Login />
            )    
        }
    } catch(err) {
        console.log(err);
        return (
            <Login />
        )
    }
}