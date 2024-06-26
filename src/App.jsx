import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Skills } from './components/Skills/Skills'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
    <Home />
    <Navbar />
    <About />
    <Skills/>
    <Contact/>
    </>
  )
}

export default App
