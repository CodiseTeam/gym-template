import React from "react";
import './styles.css'
import Image1 from "./4.jpg";

const Services = () => {
    const cards = [
        {
            id:1,
            name:"Yoga",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
        {
            id:2,
            name:"Yoga",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
        {
            id:3,
            name:"Yoga",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
        {
            id:4,
            name:"Yoga",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        },
    ]
  return (
    <div className="service__main">
      <h1>Services</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <div className="cards">
        {
            cards.map((item)=>{
                return(
                    <div class="card">
            <img className='card__img' src={Image1} alt="Image1" style={{width:"100%"}}/>
            <div class="card__body">
                <h4 class="card-title">{item.name}</h4>
                <p class="card-text">{item.text}</p>
            </div>
        </div>
                )
            })
        }
    </div>

    </div>
  );
};

export default Services;
