import { Route } from 'wouter'
import './App.css'
import Home from './pages/Home/Home'
import { useState } from 'react'
import {ExpressionContextProvider} from './context/ExpressionContext'

function App() {

  return (
    <ExpressionContextProvider>
      <Route component={Home} path='/' />
    </ExpressionContextProvider>
  )
}

export default App
