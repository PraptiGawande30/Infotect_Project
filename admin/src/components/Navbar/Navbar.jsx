import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import profile_image from '../../assets/profile_image.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="Logo" />
      <img className='profile' src={profile_image} alt="Profile" />
    </div>
  );
};

export default Navbar;
