import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import  axios  from 'axios'
const initalState ={
    transactions: [],
    error: null,
    loading: true
}


export const GlobalContext = createContext(initalState)

export const GlobalProvider =({children}) => {
const [state, dispatch] =useReducer(AppReducer, initalState)


//actions

async function getTransactions(){
    try {
        const res = await axios.get('https://family-osfow.herokuapp.com/api/v1/transactions')

        
        dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data.data
        })
    } catch (err) {
     dispatch({
         type :'TRANSACTION_ERROR',
         PAYLOAD: err.response.data.error
     })
      
        
    }
}

async function deleteTransaction(id){
   try {
       await axios.delete(`https://family-osfow.herokuapp.com/api/v1/transactions/${id}`)

       dispatch({
           type: 'DELETE_TRANSACTION',
           payload: id
       })
   } catch (err) {
       dispatch({
           type: 'TRANSACTION_ERROR',
           payload: err.response.data.error
       })
   }
}

async function addTransaction(transaction){
    const config = {
        header : {
            'Content -Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('https://family-osfow.herokuapp.com/api/v1/transactions', transaction, config)

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        })
    }
}


return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>)
}