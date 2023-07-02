import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <>
      <Header />
      <main className='appContainer'>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App