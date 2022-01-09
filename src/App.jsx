import { useState } from 'react'

import './App.css'

import Cart from './components/Cart/Cart'


import Total from './components/Total.jsx/Total'
import ItemsList from './components/ItemsList/ItemsList'

function App() {
const [items, setItems] = useState()


  return (
    <div className="App">
      
      <ItemsList />

      <Cart/>
      
      <Total />
    </div>
  )
}

export default App
