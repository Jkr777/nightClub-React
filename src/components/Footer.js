import React from 'react';
import { ReactComponent as Facebook } from '../images/svgFiles/facebook-box.svg';
import { ReactComponent as Twitter } from '../images/svgFiles/twitter-box.svg';
import { ReactComponent as Google } from '../images/svgFiles/google-plus-box.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <a href="https://facebook.com"><Facebook className="footer__social__icon" /></a>
      <a href="http://twitter.com"><Twitter className="footer__social__icon" /></a>
      <a href="http://google.com"><Google className="footer__social__icon" /></a>
    </div>
    <small>BAMBOO 2019. All rights reserved.</small>
  </footer>
);

export default Footer;