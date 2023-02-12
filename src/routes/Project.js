import React from 'react';
import Navbar from "../components/Navbar";

import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2';

import Pricingcard from '../components/Pricingcard';

import Work from '../components/Work';

const project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="project." text="some of my " />
      <Work />
      
      <Pricingcard />

      <Footer />
    </div>
  )
}

export default project 