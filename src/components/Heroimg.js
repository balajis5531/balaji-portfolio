import "./Heroimg.css";

import React from 'react';

// import IntroImg from "../assets/introimg.jpg";

import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        {/* <div className="mask">
            <img className="intro-img" src={IntroImg} alt="introimg" />
        </div> */}
        <div className="content">

            <p> HI, I'M A learner</p>
            <h1>Develepor</h1>
            <div className="pro-btn">
                <Link to="/Project" className="btn">Project</Link>
                <Link to="/Contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg