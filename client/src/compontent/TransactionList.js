import React,{useContext, useEffect} from 'react'
import Transaction from './Transaction'
import { GlobalContext} from '../Context/GlobalState'

const TransactionList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext)

    useEffect(()=>{
        getTransactions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <h3>History</h3>
                <ul>
                    {transactions.map(transaction =>(<Transaction key={transactions.id} transaction ={transaction }/>))}
                   
                </ul>

        </>
    )
}

export default TransactionList

