import React from 'react';

export default function InputBox(props) {
    return (
        <div className = {props.outterClassName}>
            <label>{props.label}</label>
            <input type = {props.type} 
                   className = {props.innerClassName} 
                   placeholder = {props.placeholder}
                   value = {props.value}
                   onChange = {props.onChange} />
            <span className={props.errorClassName}>{props.errorMessage}</span>
        </div>
    );
}