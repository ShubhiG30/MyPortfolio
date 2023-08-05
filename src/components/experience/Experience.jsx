import React from 'react'
import './style.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { TagCloud } from "@frank-mayer/react-tag-cloud";
const Experience = () => {
  return (
    <section id='experience'>
     <h5> What Skills I Have</h5>
     <h2>My Experience</h2>
     <div className='container experience__container'>
      <div className='experience__frontend'>
       <h3>Frontend Development</h3>
       <div className='experience__content'>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Moderate</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Moderate</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>React</h4>
        <small className='text-light'>Moderate</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Vite</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
       </div>
      </div>
      <div className='experience__backend'>
      <h3>Backend Development</h3>
       <div className='experience__content'>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div><h4>Node JS</h4>
        <small className='text-light'>Beginner</small></div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>PHP</h4>
        <small className='text-light'>Moderate</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>MongoDB</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>MySQL</h4>
        <small className='text-light'>Experienced</small>
       </div>
        </article>
       </div>
      </div>
      <div className='experience__ML'>
      <h3>ML Development</h3>
       <div className='experience__content'>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Python</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>MatplotLib</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Pandas</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Numpy</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>SKLearn</h4>
        <small className='text-light'>Moderate</small>
        </div>
        </article>
       </div>
      </div>
      </div>
    </section>
   
  )
}

export default Experience