import React from 'react';
import './header.css'

function Header() {
  return (
    <>
    <header>
        <a href="#" className="logo">
          <img src="./images/logo.png" alt=""/>
        </a>
        <ul className="menu">
              <li><a href="#"> Home </a></li>
              <li><a href="#"> About us </a></li>
              <li><a href="#"> Our Partners </a></li>
              <li><a href="#"> Contact us </a></li>
              <a class="nav-btn" href="#"><b> PARTNER LOGIN </b></a>
        </ul>
    </header>
    </> 
  )
}

export default Header