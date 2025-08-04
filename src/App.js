// shortcut to generate base: rafce
import React from 'react';
import { Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';
 
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <Work />
        <Skills />
        <Footer />
    </div>
  )
}

export default App;
