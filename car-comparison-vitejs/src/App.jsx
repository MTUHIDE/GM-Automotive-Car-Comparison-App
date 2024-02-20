import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './Components/Nav/navbar'
import Footer from './Components/Footer/footer'
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Footer/>
      </div>
    </>
  )
}

export default App
