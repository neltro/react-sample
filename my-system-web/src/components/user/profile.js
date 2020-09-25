import React, { useEffect, useReducer } from 'react';
import { updateProfile } from '../../services/profileService';
import MasterLabels from '../../config/constants';
import InputBox from '../ui/inputbox';
import Button from '../ui/button';
import { useHistory, useLocation } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

export default function Profile (props) {
    const authContext = useAuthContext();
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name: authContext.authUser?.name ?? '',
            email: authContext.authUser?.email ?? '',
            errMsgName: '',
            errMsgEmail: '',
            errMsgNameClassName: 'd-none', 
            errMsgEmailClassName: 'd-none',
            msgUpdatedClassName: 'd-none'
        }
    )

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/login" } };
    if (!authContext?.authUser?.token ?? null){
        history.replace(from);
    }

    useEffect(() => {
        setState({msgUpdatedClassName: 'd-none'});
    },[])

    const handleNameChange = (e) => {
        setState({name: e.target.value});
        if (state.name !== ''){
            setState({errMsgName: ''});
            setState({errMsgNameClassName: 'd-none'});
            setState({msgUpdatedClassName: 'd-none'});
        }
    }

    const handleEmailChange = (e) => {
        setState({email: e.target.value});
        if (state.email !== ''){
            setState({errMsgEmail: ''});
            setState({errMsgEmailClassName: 'd-none'});
            setState({msgUpdatedClassName: 'd-none'});
        }
    }

    const updateUser = async () => {
        const user = {
            name: state.name,
            email: state.email,
            oldEmail: authContext.authUser.email
        }
        const result = await updateProfile(user);
        if (!result.success){
            showErrors(result.msgs);
        } else {
            setState({msgUpdatedClassName: 'success-message'});
        }

    }

    const showErrors = (msgs) => {
        msgs.forEach(msg => {
            if (msg.param === 'email'){
                setState({errMsgEmail: msg.msg});
                setState({errMsgEmailClassName: 'error-label'});
            } 
            else if (msg.param === 'name'){
                setState({errMsgName: msg.msg});
                setState({errMsgNameClassName: 'error-label'});
            } else {
                setState({errMsgEmail: msg.msg});
                setState({errMsgEmailClassName: 'error-label'});
            }
        });
    }

    return (
        <form>
            <h3>{MasterLabels.labels.profile}</h3>

            <InputBox 
                outterClassName = 'form-group'
                innerClassName = 'form-control'
                label = {MasterLabels.labels.name}
                type = 'text'
                placeholder = {MasterLabels.input.placeholder.name}
                value = {state.name}
                onChange = {handleNameChange}
                errorClassName = {state.errMsgNameClassName}
                errorMessage = {state.errMsgName}
            />

            <InputBox 
                outterClassName = 'form-group'
                innerClassName = 'form-control'
                label = {MasterLabels.labels.email}
                type = 'email'
                placeholder = {MasterLabels.input.placeholder.email}
                value = {state.email}
                onChange = {handleEmailChange}
                errorClassName = {state.errMsgEmailClassName}
                errorMessage = {state.errMsgEmail}
            />

            <div className = 'form-group'>
                <span className={state.msgUpdatedClassName}>Successfully updated.</span>
            </div>

            <Button 
                id = 'btnRegister'
                className = 'btn btn-primary btn-block'
                buttonName = { MasterLabels.labels.submit }
                onClick = { updateUser }
            />

        </form>
    );
}