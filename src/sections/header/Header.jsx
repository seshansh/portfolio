import React from 'react'
import "./Header.css"
// import Profile from "../../assets/profile.jpg"
import sk from "../../assets/sk.jpeg";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={sk} alt="headerProfile" />
        </div>
        <h3>Seshansh Kumar</h3>
        <p>
          A computer science student looking for opportunity in the field of web development to get experience, enhance knowledge and sharp skills.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary' target="_blank" rel="noreferrer">Let's Talk</a>
          <a href="https://github.com/seshansh?tab=repositories" className='btn light' target='_blank' rel="noreferrer">My Work</a>
        </div>
      </div>
    </header>
  )
}

export default Header