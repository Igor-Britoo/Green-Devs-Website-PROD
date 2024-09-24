import React from 'react'
import { Main } from '../components/styled/HomeComponents';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Services from '../components/Services';

const Home = () => {
  return (
    <Main>
      <Hero />
      <Quote />
      <Services />
    </Main>
  )
}

export default Home