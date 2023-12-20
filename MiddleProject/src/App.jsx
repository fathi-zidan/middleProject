import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import HouseContextProvider from './components/HouseContext'
import HouseList from './components/HouseList'
import PropertyDetails from './pages/PropertyDetails'
import Footer from './components/Footer'
import AddHouse from './pages/AddHouse'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

function App() {

  return (

    <BrowserRouter>
      <HouseContextProvider>
        <div className='max-w-[1440px] mx-auto bg-white' >
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/property/:id' element={<PropertyDetails />} />
            <Route path="/Add" element={<AddHouse />} />
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/LogIn' element={<LogIn/>} />

          </Routes>
          <Footer />

        </div>
      </HouseContextProvider>
    </BrowserRouter>
  )
}

export default App
