import React, { useReducer } from 'react';
import InputBox from '../ui/inputbox';    
import Button from '../ui/button';         
import MasterLabels from '../../config/constants'; 
import { login } from '../../services/userService';
import { Link } from 'react-router-dom';

export default function Login() {
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            email: '',
            password: '',
            errMsgEmail: '',
            errMsgPassword: '',
            errMsgEmailClassName: 'd-none',
            errMsgPasswordClassName: 'd-none'
        }
    )

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

    function showErrors(msgs){
        msgs.forEach(msg => {
            if (msg.param === 'email'){
                setState({errMsgEmail: msg.msg});
                setState({errMsgEmailClassName: 'error-label'});
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

    const loginUser = async () => {
        const user = {
            email: state.email,
            password: state.password
        }
        const result = await login(user);
        if (!result.success){
            showErrors(result.msg);
        } else {
            console.log('after login');
            console.log(result);
            sessionStorage.setItem('token',result.token);
            window.location.href = '/';
        }
    } 

    return (
        <form>
            <h3>{MasterLabels.labels.login}</h3>

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
                label = {MasterLabels.labels.password}
                type = 'password'
                placeholder = {MasterLabels.input.placeholder.password}
                value = {state.password}
                onChange = {handlePasswordChange}
                errorClassName = {state.errMsgPasswordClassName}
                errorMessage = {state.errMsgPassword}
            />

            <Button 
                id = 'btnLogin'
                className = 'btn btn-primary btn-block'
                buttonName = {MasterLabels.labels.submit}
                onClick = {loginUser}
            />

            <p className='already-registered text-right'>
                Do you want to <Link to='/register'>Register?</Link>
            </p>
        </form>
    );
}