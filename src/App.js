import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Project, LandingPage } from "./pages"; 

export default function App() {
  return ( 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="project/:slug" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
