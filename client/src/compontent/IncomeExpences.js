import React,  {useContext} from 'react'
import { GlobalContext} from '../Context/GlobalState'
import {formatNumber} from '../utils/format'
const IncomeExpences = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount) 

    const income = amounts
    .filter(item=> item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

    const expense = (amounts.filter(item => item < 0).reduce((acc, item)=> (acc += item), 0)
    * -1).toFixed(2)

    return (
        <div>
            <div>
                <h4>Income</h4>
                <p>{formatNumber(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p>{formatNumber(expense)}</p>
            </div>
            
        </div>
    )
}

export default IncomeExpences
