import React from 'react';

import Navbar from "../components/Navbar";

import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2';
import Aboutcontent from '../components/Aboutcontent';

const about = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="about" text="iam friend person in the world if you want speak for me please ping me" />
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default about