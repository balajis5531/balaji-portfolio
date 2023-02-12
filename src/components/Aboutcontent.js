import "./aboutcontent.css"

import React from 'react'
import { Link } from "react-router-dom"
import intro from "../assets/introimg.jpg"
import intro1 from "../assets/introimg.jpg"


const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
<h1>WHO AM I?</h1>
<p>I am a student . I create responcive secure wepsite for my users</p>
<Link to="/Contact">
    <button classname="btn">Contact</button>
</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={intro} className="img" alt="true" />
                </div>
                <div className="img-stack buttom">
                    <img src={intro1} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent