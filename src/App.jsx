import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
     <div className='App'>
     <div>
      
       <div className='white-gradiant'>
         <Header/>
         <Hero/>
       </div>
        <Residencies/>
        <Value/>
        <Contact />
     </div>
     </div>
    </>
  )
}

export default App
