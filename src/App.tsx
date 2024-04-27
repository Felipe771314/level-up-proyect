import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarReact from '../src/components/navbar/navbar';
import './App.css';
import Home from './pages/home';
import Cards from './pages/rickAndMorty';

function App() {
  return (
    <Router>
      <div className="app">
        <NavbarReact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rick-and-morty" element={<Cards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

