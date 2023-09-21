import React from 'react';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';

const Home = () => {

  const data = {
    name: "Homepage section"
  }


  return (
    <>
      <HeroSection heading={data} />
      <Trusted />
      <Services />

    </>
  )
}

export default Home