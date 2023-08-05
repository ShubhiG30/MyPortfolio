import React from 'react'
import './style.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import Typewriter from 'typewriter-effect'
import HeaderSocials from './HeaderSocials'
const introdata={
  animated:{
    first:"I am FullStack Developer",
    second:"I love coding",
    third:"I develop Machine Learrning Models",
    fourth:"I code cool websites"
  }
};
const Header = () => {
  return (
    <header>
      <div className="header__container">
      <h5>Hello I'm</h5>
      <h1>Shubhi Gupta</h1>
      <h5 className='text-light'>
      <Typewriter
      options={{
        strings:[
          introdata.animated.first,
          introdata.animated.second,
          introdata.animated.third,
          introdata.animated.fourth
          
        ],
        autoStart:true,
        loop:true,
        deleteSpeed:10
      }}
      />
      </h5>
      <Cta/>
      <HeaderSocials/>
      <div className='me'>
        {/* <img src={ME} alt="me"/> */}
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header