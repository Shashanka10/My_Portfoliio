import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__social'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank"><BsGithub /></a>
        <a href='https://facebook.com' target="_blank"><BsFacebook /></a>
        <a href='https://instagram.com' target="_blank"><BsInstagram /></a>
        
    </div>
  )
}

export default Socials;