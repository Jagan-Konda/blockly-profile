import React, { useState, useEffect } from 'react';
import './index.css';

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : '';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const handImageUrl = 'https://i.ibb.co/Hf5c6mXr/Rectangle.png';
  const yellowBlobUrl = "https://i.ibb.co/Rp52320Y/Vector-4.png" ;
  const lightBlobUrl = "https://i.ibb.co/wFsKv2zz/Vector-3.png" ;
  const darkBlobUrl = "https://i.ibb.co/M5BFC5n7/Vector-5.png" ;

  return (
    <section className={`about-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '🌙' : '☀️'}
      </div>

      <div className="about-container">
        <div className="image-stack">
          <img src={darkMode ? darkBlobUrl : lightBlobUrl} alt="blob" className="blob-bg" />
          <img src={handImageUrl} alt="hand" className="hand-img" />
          <img src={yellowBlobUrl} alt="yellow blob" className="yellow-blob" />
        </div>

        <div className="about-content">
          <h1>
            <span className="dropcap">T</span>his is it. <span className="emoji">:)</span>
          </h1>
          <hr />
         <p>
            Anish Kr. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for designing beautiful and functional user experiences.
            Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile.
            He has been in the business of creating since he hung his first painting on the wall when he was 11.
          </p>
          <p>
            He holds a <strong>bachelor degree in Computer Applications</strong>. During his graduation, he has been actively involved in the web design community for the last 3 years.
            He has designed websites for small businesses, events, nonprofits and more. Currently he’s based in <strong>Bihar, India</strong>, where he’s working as an independent creative.
          </p>
          <p>
            His interests, however, extend beyond the web and he loves helping people with branding and print design.
            He even loves designing <strong>3D floor plan</strong>.
          </p>
          <p>
            When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;