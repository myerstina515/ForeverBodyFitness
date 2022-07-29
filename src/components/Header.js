import React from 'react';
import Sign from '../assets/Signage.jpeg';
import './Header.scss';

const Header = () => {
  return (
    <header id="headerDiv">
      <img id="signage" alt="Forever Body Fitness logo and sign, white background with black print, with a red background behind the word fitness." src={Sign}></img>
    </header>
  )
}
export default Header;