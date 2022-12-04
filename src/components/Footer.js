import React from 'react';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import '../App.css';

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <img width={30} height={30} src={facebook} alt="" />
        </a>
        <a
          href="https://twitter.com/julesedz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={30} height={30} loading="lazy" src={twitter} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/julesedozie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={30} height={30} src={linkedin} alt="" />
        </a>
        <a
          href="https://github.com/julzedz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={30} height={30} loading="lazy" src={github} alt="" />
        </a>
      </div>
      <div className="copyright">
        <h4 className="copy">©Jules Edozie - 2022</h4>
      </div>
    </div>
  );
}

export default Footer;
