import React from 'react'
import ImageSlider from './ImageSlider';
import './Header.css';

function Header({logoutFunc}) {
  return (
    <div className="Header">
      <ImageSlider/>
      <div className="LogoutButton" onClick={logoutFunc}>
        Logout
      </div>
    </div>
  )
}

export default Header;