import React from 'react';
import HeroSection from './components/HeroSection';

const About = () => {

  const data = {
    name: "About section"
  }



  return (
    <>
      <HeroSection heading={data} />
    </>
  )
}

export default About