import React from 'react';

function Footer() {
const date = new Date().getFullYear();

  return (
    <footer> <big>&#169;</big>  { date } #VANLIFE </footer>
  )
}

export default Footer;
