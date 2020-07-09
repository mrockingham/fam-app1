import React from 'react';
import Header from './compontent/Header'
import Balance from './compontent/Balance.js'
import IncomeExpences from './compontent/IncomeExpences.js'
import TransationList from './compontent/TransactionList'
import AddTransaction from './compontent/AddTransaction'
import './App.css';

import {GlobalProvider} from './Context/GlobalState'
function App() {
  return (
    <GlobalProvider>
    <div className='App'>
      <div className='Header'>
        <div className='HeaderText'><h1>OSFOW EXPENCES</h1></div>
        
      </div>
      
    <Header />
    <div className = 'container'>
    <Balance />
    <IncomeExpences/>
    <TransationList/>
    <AddTransaction />
    
    </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
