import React from 'react';
import '../assests/css/header.css';
import CVX from './CVX';
import ME from '../assests/img/me.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shashanka Luitel</h1>
        <h5 className="text-light">
          FullStack Developer
        </h5>
        <CVX />
        <Socials />
        <div className="me">
          <img src={ME} alt='me' className='imi'></img>
        </div>
        <a href='#Contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;