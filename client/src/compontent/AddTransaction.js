import React, {useState, useContext} from 'react'
import { GlobalContext} from '../Context/GlobalState'

const AddTransaction = () => {
const [text, setText] = useState('')
const [amount, setAmount] = useState('')

const {addTransaction} = useContext(GlobalContext)

const onSubmit = e =>{
    e.preventDefault()

    const newTransaction ={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
    }

    addTransaction(newTransaction)
}

    return (
        <>
          <h2>Add new Transaction</h2>
          <form onSubmit={onSubmit}>
              <div className= 'form-control'>
                  <label htmlFor="text"><h2>Transaction name</h2></label>
                   <input type= 'text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="enter Text..."/>
              </div>
              <div className= 'form-control'>
                  <label htmlFor='amount'><h3>
                      Amount <br/>
                      Negative (-) = Expense<br/> Positive (+) = Income<br/></h3></label>
                      <input type="number" value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                     placeholder='Enter amount...'/>
              </div>
              <button className='btn'>Add Transaction</button>  
        </form>  
        </>
    )
}

export default  AddTransaction
