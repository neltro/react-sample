import React, { useState, createContext } from 'react';

const AuthContext = createContext([{}, () => {}]);

const AuthContextProvider = props => {
    const [state, setState] = useState({});

    return(
        <AuthContext.Provider value={[state, setState]}>
            {props.children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthContextProvider }