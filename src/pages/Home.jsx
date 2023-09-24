import React from 'react';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import Product from './components/CProduct';

const Home = () => {

  const data = {
    name: "Homepage section"
  }


  return (
    <>
      <HeroSection heading={data} />
      <Product />
      <Services />
      <Trusted />
    </>
  )
}

export default Home