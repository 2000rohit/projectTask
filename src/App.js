import './App.css'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './Screens/HomeScreen'
import NavBar from './Component/NavBar'
import CartScreen from './Screens/CartScreen/CartScreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact='true' path='/' element={<HomeScreen />} />
          <Route exact='true' path='/cart' element={<CartScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
