import React from 'react';
import './Footer.scss';
import Sign from '../assets/Signage.jpeg';

const Footer = () => {
  return (
    <footer id="footer">
      <p id="footerImage">
        <img id="signage2" src={Sign} alt="Forever Body Fitness Logo (small)"/>Forever Body Fitness &copy; 2022 
        {/* <br /> */}
          <a href="mailto:tedashitrained@gmail.com"> tedashitrained@gmail.com</a>
      </p>
    </footer>
  )
}
export default Footer;