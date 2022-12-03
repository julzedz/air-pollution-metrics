import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from './images/icons8.png';
import '../App.css';

function Navbar() {
  return (
    <>
      <header className="nav-div">
        <h1 className="logo">Air Pollution Index</h1>
        <img src={logo} className="hamburger" alt="Hamburger Menu Icon" />
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
