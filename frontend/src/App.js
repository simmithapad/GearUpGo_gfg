import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Tiles from './components/Tiles/Tiles.jsx'; 
import Page1 from './pages/About.jsx';
// import Page2 from './pages/Page2';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tiles />} />
          <Route path="/page1" element={<Page1 />} />
          {/* <Route path="/page2" element={<Page2 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
