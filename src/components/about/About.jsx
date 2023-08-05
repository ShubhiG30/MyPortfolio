import React from 'react'
import './style.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const introdata={
  description:" Hello there, I am Shubhi Gupta, a third year undergraduate, pursuing B.Tech. from IGDTUW. One of my greatest strengths lies in my proficiency in web development, where I have honed my skills in front-end and back-end technologies. Additionally, my interest in machine learning has opened up new avenues for me to delve into the realm of data science and artificial intelligence. Beyond the world of technology, I have a deep appreciation for art and painting. Embracing my creativity through painting allows me to unwind and express myself in a different way, providing a perfect balance to my technical pursuits. As a lifelong learner, I am always eager to expand my knowledge and skills. Apart from my technical pursuits, I am known among my peers for being friendly and approachable. I am excited about the possibilities that lie ahead, and I look forward to embracing new challenges and creating a positive impact in the world around me."
}
const About = () => {
  return (
    <section id='about'>
        <h5> Get to Know</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Image"/>
            </div>
          </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Matriculation</h5>
                <small>ICSE, 95%</small>
              </article>
              <article className='about__card'>
              {/* <FiUsers className='about__icon'/> */}
              <FaAward className='about__icon'/>
                <h5>Intermediate</h5>
                <small>CBSE, 90.6%</small>
              </article>
              <article className='about__card'>
              {/* <VscFolderLibrary className='about__icon'/> */}
              <FaAward className='about__icon'/>
                <h5>College</h5>
                <small>ECE-AI, IGDTUW</small>
              </article>
            </div>
           
      <p>
      <Typewriter
      options={{
        strings:[
          introdata.description
        ],
        autoStart:true,
        loop:true,
        deleteSpeed:10,
        delay:2,
        pauseFor:10000
      }}
      />
      </p>
          
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About