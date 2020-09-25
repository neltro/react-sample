import React, { useReducer } from 'react';
import MasterLabels from '../../config/constants';
import InputBox from '../ui/inputbox';
import Button from '../ui/button';
import { Link } from 'react-router-dom';
import { create } from '../../services/registerService';

export default function Register () {
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name: '',
            email: '',
            password: '',
            errMsgName: '',
            errMsgEmail: '',
            errMsgPassword: '',
            errMsgNameClassName: 'd-none', 
            errMsgEmailClassName: 'd-none',
            errMsgPasswordClassName: 'd-none'
        }
    )

    function handleNameChange(e){
        setState({name: e.target.value});
        if (state.name !== ''){
            setState({errMsgName: ''});
            setState({errMsgNameClassName: 'd-none'});
        }
    }

    function handleEmailChange(e){
        setState({email: e.target.value});
        if (state.email !== ''){
            setState({errMsgEmail: ''});
            setState({errMsgEmailClassName: 'd-none'});
        }
    }

    function handlePasswordChange(e){
        setState({password: e.target.value});
        if (state.password !== ''){
            setState({errMsgPassword: ''});
            setState({errMsgPasswordClassName: 'd-none'});
        }
    }

    const registerUser = async () => {
        const user = {
            name: state.name,
            email: state.email,
            password: state.password
        }
        const result = await create(user);
        if (!result.success){
            showErrors(result.msgs);
        } else {
            window.location.href = '/login';
        }
    }

    function showErrors(msgs){
        msgs.forEach(msg => {
            if (msg.param === 'email'){
                setState({errMsgEmail: msg.msg});
                setState({errMsgEmailClassName: 'error-label'});
            } 
            else if (msg.param === 'name'){
                setState({errMsgName: msg.msg});
                setState({errMsgNameClassName: 'error-label'});
            }
            else if (msg.param === 'password'){
                setState({errMsgPassword: msg.msg});
                setState({errMsgPasswordClassName: 'error-label'});
            } else {
                setState({errMsgEmail: msg.msg});
                setState({errMsgEmailClassName: 'error-label'});
            }
        });
    }

    return (
        <form>
            <h3>{MasterLabels.labels.register}</h3>

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

            <InputBox 
                outterClassName = 'form-group'
                innerClassName = 'form-control'
                label = { MasterLabels.labels.password }
                type = 'password'
                placeholder = { MasterLabels.input.placeholder.password }
                value = {state.password}
                onChange = {handlePasswordChange}
                errorClassName = {state.errMsgPasswordClassName}
                errorMessage = {state.errMsgPassword}
            />

            <Button 
                id = 'btnRegister'
                className = 'btn btn-primary btn-block'
                buttonName = { MasterLabels.labels.submit }
                onClick = { registerUser }
            />

            <p className='already-registered text-right'>
                Already registered? Please <Link to='/login'>login</Link>
            </p>
        </form>
    );
}