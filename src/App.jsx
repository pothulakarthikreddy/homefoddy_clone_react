import React from 'react'
import LandingPage from './foody/pages/LandingPage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import ProductMenus from './foody/components/ProductMenus'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<LandingPage/>}/>
        <Route path='/products/:firmId/:firmName' element= {<ProductMenus/>}/>
      </Routes>
      
    </div>
  )
}

export default App