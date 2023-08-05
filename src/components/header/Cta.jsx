import React from 'react'
import Resume from '../../assets/Shubhi_res_jul.pdf'

const Cta = () => {
  return (
    <div className='cta'>
    <a href={Resume} download className='btn'>Get Resume</a>
    <a href='#portfolio' className='btn btn-primary'>My Portfolio</a>
    </div>
  )
}

export default Cta