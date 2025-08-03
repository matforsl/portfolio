// shortcut to generate base: rafce
import React from 'react';
import { About, Footer, Header, Header_new, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import './App.scss';
 
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header_new />
        {/*<Header />*/}
        <About />
        <Work />
        <Skills />
        {/*<Testimonials />*/}
        <Footer />
    </div>
  )
}

export default App;
