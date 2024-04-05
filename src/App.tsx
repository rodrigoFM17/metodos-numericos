import { Route } from 'wouter'
import './App.css'
import Home from './pages/Home/Home'
import {ExpressionContextProvider} from './context/ExpressionContext'
import FalsaPosicion from './pages/FalsaPosicion/FalsaPosicion'

function App() {

  return (
    <ExpressionContextProvider>
      <Route component={Home} path='/' />
      <Route component={FalsaPosicion} path='/falsa-posicion'/>
    </ExpressionContextProvider>
  )
}

export default App
