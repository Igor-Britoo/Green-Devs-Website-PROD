import React from 'react'
import { HeroSection, Logo, HeroTitle, HeroSubtitle, LearnMoreButton } from './styled/HeroComponents'
import logo from '/hero-logo.svg'

const Hero = () => {
  return (
    <HeroSection>
      <Logo src={logo} alt="Green Devs Logo" />
      <div>
        <HeroTitle>Green Devs</HeroTitle>
        <HeroSubtitle>Codificando um futuro verde</HeroSubtitle>
      </div>
      <LearnMoreButton>
        Saiba mais
      </LearnMoreButton>
    </HeroSection>
  )
}

export default Hero