import React from 'react'
import './style.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG1} alt=""/>
      </div>
      <h3>Movix-WebApp</h3>
      <div className='portfolio__item-cta'>
      <a href = "https://github.com/ShubhiG30/movix_webapp" className='btn' target='_blank'>Github</a>
      <a href = "https://movix-tshows.netlify.app/" className='btn' target='_blank'>Project Link</a>
      </div>

      </article>  
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG2} alt=""/>
      </div>
      <h3>Customer Ad Clicks</h3>
      <div className='portfolio__item-cta'>
      <a href = "https://github.com/ShubhiG30/AIMLMonth2023/blob/main/CustomerAdClicks.ipynb" className='btn' target='_blank'>Github</a>
      <a href = "https://colab.research.google.com/drive/1YFAysekGglviJxv7RcSYCf4mT0pHXltP?usp=sharing" className='btn' target='_blank'>Project Link</a>
      </div>
      </article>  
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG3} alt=""/>
      </div>
      <h3>Portfolio</h3>
      <div className='portfolio__item-cta'>
      <a href = "" className='btn' target='_blank'>Github</a>
      <a href = "https://movix-tshows.netlify.app/" className='btn' target='_blank'>Project Link</a>
      </div>
      </article>  
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG4} alt=""/>
      </div>
      <h3>PostMan Clone</h3>
      <div className='portfolio__item-cta'>
      <a href = "https://github.com" className='btn' target='_blank'>Github</a>
      <a href = "https://movix-tshows.netlify.app/" className='btn' target='_blank'>Project Link</a>
      </div>
      </article>  
      {/* <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG5} alt=""/>
      </div>
      <h3>item1</h3>
      <div className='portfolio__item-cta'>
      <a href = "https://github.com" className='btn' target='_blank'>Github</a>
      </div>
      </article>  
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={IMG6} alt=""/>
      </div>
      <h3>item1</h3>
      <div className='portfolio__item-cta'>
      <a href = "https://github.com" className='btn' target='_blank'>Github</a>
      </div>
      </article>   */}
      </div>
    </section>
  )
}

export default Portfolio