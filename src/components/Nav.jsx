import React from 'react';
import '../assests/css/nav.css';
import {FaHome} from 'react-icons/fa';
import {FaUserTie} from 'react-icons/fa';
import {GiBookmarklet} from 'react-icons/gi';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdContactPhone} from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a href='#'><FaHome /></a>
      <a href='#About'><FaUserTie /></a>
      <a href='#Experience'><GiBookmarklet /></a>
      <a href='#Services'><RiCustomerService2Fill /></a>
      <a href='#Contact'><MdContactPhone /></a>
    </nav>
  )
}

export default Nav;