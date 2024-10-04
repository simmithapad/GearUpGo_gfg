import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Rent Your Sports Gear</h2>
        <p>Explore a wide selection of sports equipment for rent, perfect for outdoor enthusiasts and sports lovers. Whether you’re planning a thrilling adventure or looking to try a new sport, we’ve got you covered with the latest gear for every activity.</p>
        <button>View Equipment</button>
      </div>
    </div>
  );
};

export default Header;