import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Tiles from './components/Tiles/Tiles.jsx'; 
import Page1 from './components/Header/Header.jsx';
import Page2 from './components/AdventureSports/Home.jsx';
import Header from './components/Header/Header.jsx';  

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home page with Tiles */}
          <Route path="/" element={<Tiles />} />
          <Route path="/dailysports" element={<Page1 />} />
          <Route path="/adventuresports" element={<Page2 />} />
          {/* Daily Sports - renders the Header */}
          <Route path="/daily-sports" element={<Header />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;