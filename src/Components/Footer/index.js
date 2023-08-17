import React from 'react'
import './footer.css'
import logo from "./3.png"

const Footer = () => {
  return (
    <footer>
        <div className='footer__logo'>
            <div><img src={logo} alt="Gymout" style={{height:'32px'}}/></div>
            <div>Gymout</div>
        </div>
        <div className='footnote'>
            <p>2023 - @codise</p>
        </div>
    </footer>
  )
}

export default Footer