
import React from 'react'
import Header from './components/Header'

import './App.scss'
import Section from './components/Section'
import { Data } from './components/Data'
import Second from './components/Second'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'> 
    <Header />
    <Section slides={Data} />
    <Second />
    <Footer />
    </div>
  )
}

export default App