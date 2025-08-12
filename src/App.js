import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Project, LandingPage } from "./pages"; 

export default function App() {
  return ( 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="project/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


// shortcut to generate base: rafce
/*
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
*/