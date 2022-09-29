import React from 'react';
import '../assests/css/about.css';
import ME1 from "../assests/img/pp.jpg";
import {RiMedal2Fill} from "react-icons/ri";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
import {BiMedal} from "react-icons/bi";

const About = () => {
  return (
    <section id='About'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME1} alt="me1"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiMedal2Fill className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about__icon' />
              <h5>Clients</h5>
              <small>50+ WorldWide</small>
            </article>

            <article className='about__card'>
              <BiMedal className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          I am an enthusiastic front end developer and graphic designer from Nepal. I have been working on several projects
          for very long time now and i have got quite an experience to this field of subject.
          </p>
          <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;