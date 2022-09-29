import React from 'react';
import '../assests/css/experience.css';
import {BsCheckCircle} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {DiJavascript1} from "react-icons/di";
import {SiBootstrap} from "react-icons/si";
import {SiTailwindcss} from "react-icons/si";
import {FaReact} from "react-icons/fa";

import {FaNodeJs} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {DiPhp} from "react-icons/di";
import {GrMysql} from "react-icons/gr";
import {FaPython} from "react-icons/fa";

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="container__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience_details'>
              <AiFillHtml5 className="experience__details-icons" /> <BsCheckCircle className="experience__details-icons" />
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience_details'>
              <IoLogoCss3 className="experience__details-icons" /> <BsCheckCircle className="experience__details-icons" />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <DiJavascript1 className="experience__details-icons" /> <BsCheckCircle className="experience__details-icons" />
              <h4>Javascript</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experience_details'>
              <FaReact className="experience__details-icons" /> <BsCheckCircle className="experience__details-icons" />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <SiBootstrap className="experience__details-icons" /> <BsCheckCircle className="experience__details-icons" />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience_details'>
              <SiTailwindcss className="experience__details-icons" /> <ImCross className='crossed'/>
              <h4>TailWind</h4>
              <small className='text-light'>No-Experience</small>
            </article>

          </div>
        </div>
        <div className="container__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience_details'>
              <FaNodeJs className="experience__details-icons" /> <ImCross className='crossed'/>
              <h4>Node JS</h4>
              <small className='text-light'>No experience</small>
            </article>

            <article className='experience_details'>
              <SiMongodb className="experience__details-icons" /> <ImCross className='crossed'/>
              <h4>MongoDB</h4>
              <small className='text-light'>No experience</small>
            </article>

            <article className='experience_details'>
              <DiPhp className="experience__details-icons" /> <ImCross className='crossed'/>
              <h4>PHP</h4>
              <small className='text-light'>No experience</small>
            </article>

            <article className='experience_details'>
              <GrMysql className="experience__details-icons" /> <ImCross className='crossed'/>
              <h4>MySQL</h4>
              <small className='text-light'>No experience</small>
            </article>

            <article className='experience_details'>
              <FaPython className="experience__details-icons" /> <ImCross className='crossed'/>
              <h4>Python</h4>
              <small className='text-light'>No experience</small>
            </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;