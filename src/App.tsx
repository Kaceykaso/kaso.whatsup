//import { useState } from 'react'
import './App.css'
import '/src/css/main.css'
//import { Calendar } from './js/calendar'

import { Header } from './components/header'
import { Footer } from './components/footer'
import Calendar from './components/calendar'

function App() {
  
  return (
    <>
      <Header />

      <section className="main">
        <div id="content" className="nes-container">
          <Calendar />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
