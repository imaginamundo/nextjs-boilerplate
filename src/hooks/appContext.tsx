import React, { createContext, useContext } from 'react';

import { IContext } from '../interfaces/context';
const Context = createContext<Partial<IContext>>({});

export function ContextProvider({ children, ...props }) {
    return (
        <Context.Provider value={{ ...props }}>
            { children }
        </Context.Provider>
    );
};


export function useAppContext() {
    const context = useContext(Context);
    return context;
};