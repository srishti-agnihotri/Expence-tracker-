import React, {useReducer , createContext } from 'react';

import contextReducer from './contextReducer';

const initialState=[];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ( { children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id});

    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSCACTION', payload: transaction });

    console.log(transactions);
    
    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}