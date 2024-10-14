import { useState } from 'react'
import './App.css'


import { Menu } from './components/Menu'
import { AppRouter } from './Router/AppRouter'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Menu/>
      <AppRouter/>
      <Footer/>
    </>
  )
  
}

export default App
