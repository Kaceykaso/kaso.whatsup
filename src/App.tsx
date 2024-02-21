//import { useState } from 'react'
import './App.css'
import '/src/css/main.css'


import { Header } from './components/header'
import { Footer } from './components/footer'
//import Calendar from './components/calendar'

function App() {
  const calID = import.meta.env.VITE_CAL_ID;
  return (
    <>
      <Header />

      <section className="main">
        <div id="content">
          <iframe 
            src={`https://calendar.google.com/calendar/appointments/schedules/${calID}?gv=true`}
            className="calView">
          </iframe>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
