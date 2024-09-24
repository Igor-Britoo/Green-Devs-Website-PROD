import React from 'react'
import { Main } from '../components/styled/HomeComponents';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <Main>
      <Hero />
      <Quote />
      <Services />
      <AboutUs />
    </Main>
  )
}

export default Home