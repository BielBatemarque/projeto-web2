import React, { useReducer } from "react";

export const globalState = {
    logado: false,
};

export const globalContext = React.createContext(globalState);

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    return(
        <globalContext.Provider value={{ state, dispatch }}>{children}</globalContext.Provider>
    );
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'autentication':
            return {...state, logado: true};
        
        case 'logout':
            return {...state, logado: false,};

        default:
            return{...state};
    };
};