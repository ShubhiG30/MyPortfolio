import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/shubhi-gupta-857568229/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/ShubhiG30' target="_blank"><FaGithub/></a>
        <a href='mailto:shubhi30003@gmail.com' target="_blank"><FaEnvelope/></a>

    </div>

  )
}

export default HeaderSocials