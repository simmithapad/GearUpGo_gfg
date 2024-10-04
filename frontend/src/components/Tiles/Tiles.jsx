import React from 'react';
import { Link } from 'react-router-dom';
import './Tiles.css';

const Tiles = () => {
  return (
    <div className="tile-container">
      <Link to="/page1" className="tile">
        <div className="tile-content">
          <h2>Daily Sports</h2>
          <p>Click to go to Page 1</p>
        </div>
      </Link>

      <Link to="/page2" className="tile">
        <div className="tile-content">
          <h2>Adventure Sports</h2>
          <p>Click to go to Page 2</p>
        </div>
      </Link>
    </div>
  );
};

export default Tiles;
