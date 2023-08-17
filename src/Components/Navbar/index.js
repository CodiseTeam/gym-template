import React from 'react'
import './Navbar.css'
import logo from "./3.png"

const Navbar = () => {
    const nav_links = [
        {
            id:1,
            name:"Home",
            to:"/"
        },
        {
            id:2,
            name:"About Us",
            to:"/"
        },    
        {
            id:3,
            name:"Services",
            to:"/"
        },
        {
            id:4,
            name:"Our Team",
            to:"/"
        },
        {
            id:5,
            name:"Pages",
            to:"/"
        },
        {
            id:6,
            name:"Contact",
            to:"/"
        },
    ] 

    const nav_social = [
        {
            id:1,
            icon:"fa fa-instagram",
            to:'/',
            name:"Instagram"
        },
        {
            id:2,
            icon:"fa fa-twitter",
            to:'/',
            name:"Twitter"
        },
        {
            id:4,
            icon:"fa fa-facebook",
            to:'/',
            name:"Facebook"
        },
        {
            id:4,
            icon:"fa fa-youtube",
            to:'/',
            name:"YouTube"
        },
        {
            id:5,
            icon:"fa fa-envelope",
            to:'/',
            name:"Email"
        },
    ]
  return (
    <div className='nav'>
        <div className='nav__logo'>
            <div><img src={logo} alt="Gymout" style={{height:'32px'}}/></div>
            <div>Gymout</div>
        </div>
        <div className='nav__items'>
            <ul>
                {
                    nav_links.map((items)=> {
                        return (
                            <li><a href={items.to}>{items.name}</a></li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='nav__profile'>
            <ul className='nav__social_links'>
                {
                    nav_social.map((items)=>{
                        return (
                            <li><a><i className={items.icon} aria-hidden="true"></i></a></li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar