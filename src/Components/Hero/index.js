import React from 'react'
import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'
import Image4 from './4.jpg'
import Image5 from './5.jpg'
import Image6 from './6.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero__main'>
        <div className='hero_sub'>
            <h1>BE BOLD, <br/> BE STRONG!!</h1>
            <h3>Gymout to gain energy and strength, activate muscles. Stay in shape however you want. And Gymout will help you for that. </h3>
            <button className='hero__btn'>Learn More</button>
        </div>
        <div className='hero_images'>
          <div className='image__grid'>
          <div className='imgcard'>
            <img className='grid__img' src={Image4} alt="Image1"/>
          </div>
          <div className='imgcard'>
          <img className='grid__img' src={Image5} alt="Image1"/>
          </div>
          <div className='imgcard'>
          <img className='grid__img' src={Image3} alt="Image1"/>
          </div>
          <div className='imgcard'>
            <img className='grid__img' src={Image1} alt="Image1"/></div>
          <div className='imgcard'><img src={Image1} alt="Image1"/></div>
          </div>
        </div>
    </div>
  )
}

export default Hero