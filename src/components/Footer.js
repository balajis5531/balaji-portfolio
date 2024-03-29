import "./Footer.css";

import React from 'react';

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-container">
                <div className="left">

                    <div className="location">
                        <FaHome size={20} style={{ color: "fff", marginRight: "2rem" }} />
                        <div>

                            <p>273 Santhai street</p>
                            <p>Villupuram</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "fff", marginRight: "2rem" }} />
                            1-2323-343-23</h4>


                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "fff", marginRight: "2rem" }} />
                            donbalajis@gmail.com</h4>


                    </div>


                </div>

                <div className="right">
                    <h4>About for myself</h4>
                    <p>This is a personal portfolie for my future purpuse and my intrest experss shown others, this is create for react</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "fff", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "fff", marginRight: "1rem" }} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer