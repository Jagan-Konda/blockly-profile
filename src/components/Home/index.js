import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    if (darkMode) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    }, [darkMode]);

    const toggleTheme = () => {
    setDarkMode(prev => !prev);
    };

  return (
    <div className="home-section">
      <header className="navbar">
        <div className="logo">ANISH KUMAR SINHA</div>
        <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>

        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </div>
      </header>

      <div className="hero-container">
        <div className="left-content">
          <div className="hello-tag">Hello!</div>
          <h1 className="hero-heading">
            I'm <span className="highlight">Anish</span> 👋
          </h1>
          <p className="subheading">
            UI/UX Designer, Front-End Developer & Thinker.<br />
            Based in India.
          </p>
          <div className="buttons">
            <a href="/Anish-CV.pdf" download="Anish-Kumar-Sinha-CV.pdf">
              <button className="btn-orange">Download CV</button>
            </a>
            <button className="btn-dark">Get in Touch!</button>
          </div>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane"></i></a>
            <a href="https://snapchat.com" target="_blank" rel="noreferrer"><i className="fab fa-snapchat-ghost"></i></a>
          </div>
        </div>

        <div className="right-content">
          <div className="image-wrapper">
            <img
              src="https://i.ibb.co/MwQNF5f/Image.png"
              alt="Anish"
              className="hero-image"
            />
          </div>
          <div className="email-text">sinhaanishkumar@outlook.com</div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;