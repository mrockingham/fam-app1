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
        <div className="incomeExpense">
            <div>
                <h2 className='income'>Income</h2>
                <p><h2>{formatNumber(income)}</h2></p>
            </div>
            <div>
                <h2  className='expense'>Expense</h2>
                <p><h2>{formatNumber(expense)}</h2></p>
            </div>
            
        </div>
    )
}

export default IncomeExpences
