import React, { useReducer } from 'react';
import InputBox from '../ui/inputbox';    
import Button from '../ui/button';         
import MasterLabels from '../../config/constants'; 
import { login } from '../../services/userService';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

export default function Login() {
    const authContext = useAuthContext();
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
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleEmailChange = (e) => {
        setState({email: e.target.value});
        if (state.email !== ''){
            setState({errMsgEmail: ''});
            setState({errMsgEmailClassName: 'd-none'});
        }
    }

    const handlePasswordChange = (e) => {
        setState({password: e.target.value});
        if (state.password !== ''){
            setState({errMsgPassword: ''});
            setState({errMsgPasswordClassName: 'd-none'});
        }
    }

    const showErrors = (msgs) => {
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

    const loginClicked = async () => { 
        const user = {
            email: state.email,
            password: state.password
        }
        const result = await login(user);
        if (!result.success){
            showErrors(result.msg);
        } else {
            authContext.setAuthUser({ 
                email: user.email, 
                name: result.name, 
                token: result.token
            });
            history.replace(from);
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
                onClick = {loginClicked}
            />

            <p className='already-registered text-right'>
                Do you want to <Link to='/register'>Register?</Link>
            </p>
        </form>
    );
}