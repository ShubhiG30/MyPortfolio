import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import TextShpere from './components/experience2/TextShpere'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AnimatedCursor from "react-animated-cursor"
import Design from './components/Design'


const App = () => {
  return (
    <>
      <div className='w-full h-screen absolute top-0 left-0'>
        <Design/>
      </div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <TextShpere/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <div className="App">
    <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
    />
    </div>
    </>
  )
}

export default App