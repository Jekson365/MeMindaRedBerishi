import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Swiper from 'swiper'
import './main.scss'
import { Application } from './pages/Application'
import { Home } from './pages/Home'
import { useContext } from 'react'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/application' element={<Application />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
