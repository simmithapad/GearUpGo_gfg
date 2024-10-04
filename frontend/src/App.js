import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Tiles from './components/Tiles/Tiles.jsx'; 
import Header from './components/Header/Header.jsx';  // Import the Header for Daily Sports
// import Page2 from './pages/Page2';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home page with Tiles */}
          <Route path="/" element={<Tiles />} />

          {/* Daily Sports - renders the Header */}
          <Route path="/daily-sports" element={<Header />} />

          {/* Other pages */}
          {/* <Route path="/page2" element={<Page2 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
