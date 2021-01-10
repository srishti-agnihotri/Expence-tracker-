import React, {useReducer , createContext } from 'react';

const initialState=[];

export const ExpenseTrsckerContext = createContext(initialState);

export const Provider = ( {children }) => {
    return (
        <ExpenseTrsckerContext.Provider value={{ appName: 'Expense Tracker' }}>
            {children}
        </ExpenseTrsckerContext.Provider>
    )
}