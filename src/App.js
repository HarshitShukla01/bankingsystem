import React from 'react'
import {Route, Routes,Switch } from 'react-router-dom';
import Transaction from './components/Transaction.js'
import Transfer from './components/Transfer.js'
import Customer from './components/Customer'
import Home from './components/Home'
import Navmenu from './components/Navmenu'

const App = () => {
  return (
    <>
      <Navmenu/>
      <Switch >
            <Route exact path="/"><Home/></Route>
            <Route exact path="/transaction"><Transaction/></Route>
            <Route exact path="/transfer/:ctID"><Transfer/></Route>
            <Route exact path="/customer"><Customer/></Route>
      </Switch>
    </>
  )
}

export default App
