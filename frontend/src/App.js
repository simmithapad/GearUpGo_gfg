import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Tiles from './components/Tiles/Tiles.jsx'; 
import Page1 from './components/Header/Header.jsx';
import Page2 from './components/AdventureSports/Home.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tiles />} />
          <Route path="/dailysports" element={<Page1 />} />
          <Route path="/adventuresports" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
