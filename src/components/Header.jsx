import logo from '/header-logo.svg'
import { HeaderSection, HeaderContainer, Logo, Nav, NavOption, HamburgerNav } from './styled/HeaderComponents'
import { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 75) setNavbarActive(true)
    else setNavbarActive(false)
  })

  return (
    <HeaderSection $navbarActive={`${navbarActive}`} $mobileMenuOpen={`${isOpen}`}>      
      <HeaderContainer>
        <a href="/"> <Logo src={logo} alt="Green Devs logo" /> </a>

        <Nav>
          <NavOption>
            <a href="/">HOME</a>
          </NavOption>
          <NavOption>
            <a href="/">SERVIÇOS</a>
          </NavOption>
          <NavOption>
            <a href="/">SOBRE NÓS</a>
          </NavOption>
          <NavOption>
            <a href="/">CONTATO</a>
          </NavOption>
          <NavOption>
            <a href="/">FAQ</a>
          </NavOption>
        </Nav>

        <Hamburger toggled={isOpen} toggle={setOpen} size={32} direction='left' duration={0.8} distance="lg" color="#fff"  />
      </HeaderContainer>

      <HamburgerNav open={isOpen}>
        <NavOption>
          <a href="/">HOME</a>
        </NavOption>
        <NavOption>
          <a href="/">SERVIÇOS</a>
        </NavOption>
        <NavOption>
          <a href="/">SOBRE NÓS</a>
        </NavOption>
        <NavOption>
          <a href="/">CONTATO</a>
        </NavOption>
        <NavOption>
          <a href="/">FAQ</a>
        </NavOption>
      </HamburgerNav>
    </HeaderSection>
  )
}

export default Header