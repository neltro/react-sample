import React from 'react';
import MasterLabels from '../../config/constants';
import useAuthContext from '../../hooks/useAuthContext';
import Login from '../user/login';
import Items from '../toolbars/items';

export default function Toolbar () {
    const authContext = useAuthContext();
    const logout = () => {
        authContext.setAuthUser({});
        return (
            <>
                <Toolbar />
                <Login />
            </>
        )
    };

    if (authContext?.authUser?.token ?? null){
        return (
            <Items
                firstLink = '/profile'
                firstText = {MasterLabels.labels.profile}
                secondLink = '/'
                secondText = {MasterLabels.labels.logout}
                onClick = {logout}
            />
        )
    } else {
        return(
            <Items
                firstLink = '/login'
                firstText = {MasterLabels.labels.login}
                secondLink = '/register'
                secondText = {MasterLabels.labels.register}
            />
        )
    }
}