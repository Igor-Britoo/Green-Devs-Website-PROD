import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Main } from '../components/styled/HomeComponents';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Main>
      <ToastContainer />
      <Hero />
      <Quote />
      <Services />
      <AboutUs />
      <ContactForm />
      <FAQ />
      <Footer />
    </Main>
  )
}

export default Home