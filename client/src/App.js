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
    <div>
      expence
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
