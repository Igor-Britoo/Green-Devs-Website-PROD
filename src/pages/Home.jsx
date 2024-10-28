import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { Main } from '../components/styled/HomeComponents';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const homeRef = useRef();
  const servicesRef = useRef();
  const aboutUsRef = useRef();
  const contactRef = useRef();
  const faqRef = useRef();

  return (
    <Main>
      <ToastContainer />
      <Header 
        homeRef={homeRef} 
        servicesRef={servicesRef} 
        aboutUsRef={aboutUsRef} 
        contactRef={contactRef} 
        faqRef={faqRef} 
      />
      <Hero ref={homeRef} faqRef={faqRef} />
      <Quote />
      <Services ref={servicesRef} />
      <AboutUs ref={aboutUsRef} />
      <ContactForm ref={contactRef} />
      <FAQ ref={faqRef} />
      <Footer />
    </Main>
  );
};

export default Home;