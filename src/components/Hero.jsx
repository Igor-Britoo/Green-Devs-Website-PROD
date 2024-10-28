import React, { forwardRef } from 'react'
import { HeroSection, Logo, HeroTitle, HeroSubtitle, LearnMoreButton } from './styled/HeroComponents'
import logo from '/hero-logo.svg'

const Hero = forwardRef(({ faqRef, ...props }, ref) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <HeroSection ref={ref} {...props}>
      <Logo src={logo} alt="Green Devs Logo" />
      <div>
        <HeroTitle>Green Devs</HeroTitle>
        <HeroSubtitle>Codificando um futuro verde</HeroSubtitle>
      </div>
      <LearnMoreButton onClick={() => scrollToSection(faqRef)}>
        Saiba mais
      </LearnMoreButton>
    </HeroSection>
  )
})

export default Hero