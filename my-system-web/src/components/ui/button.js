import React from 'react';

export default function Button(props) {
    return (
        <button
            type = 'button'
            id = { props.id }
            onClick = { props.onClick }
            className = { props.className }>
            { props.buttonName }
        </button>
    );
};
