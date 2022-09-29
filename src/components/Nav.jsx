import React from 'react';
import '../assests/css/nav.css';
import {FaHome} from 'react-icons/fa';
import {FaUserTie} from 'react-icons/fa';
import {GiBookmarklet} from 'react-icons/gi';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdContactPhone} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setactiveNav]=useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setactiveNav('#')} className={activeNav === '#' ? 'active' : '' }><FaHome /></a>
      <a href='#About' onClick={()=> setactiveNav('#About')} className={activeNav === '#About' ? 'active' : '' }><FaUserTie /></a>
      <a href='#Experience' onClick={()=> setactiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : '' }><GiBookmarklet /></a>
      <a href='#Services' onClick={()=> setactiveNav('#Services')} className={activeNav === '#Services' ? 'active' : '' }><RiCustomerService2Fill /></a>
      <a href='#Contact' onClick={()=> setactiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : '' }><MdContactPhone /></a>
    </nav>
  )
}

export default Nav;