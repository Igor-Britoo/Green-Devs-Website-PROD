import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 768px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('hero-background.png');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position-x: center;
  gap: 10px;
`

export const Logo = styled.img`
  width: 140px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    width: 120px;
  }
`

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-weight: 600;
  line-height: 7rem;
  text-align: center;
  letter-spacing: 0.1em;
  color: #fff;
  text-shadow: 
    -1px -1px 0 black,  /* Top-left contour */
    1px -1px 0 black,   /* Top-right contour */
    -1px 1px 0 black,   /* Bottom-left contour */
    1px 1px 0 black,    /* Bottom-right contour */
    0px 4px 4px rgba(0, 0, 0, 0.25); /* Original shadow */
  margin-bottom: 10px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xxl}){
    font-size: 5rem;
    line-height: 6rem;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 20px;
  }
`;

export const HeroSubtitle = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.fontSizes['xxxl']};
  font-weight: 400;
  line-height: ${props => props.theme.fontSizes['xxxl']};
  text-align: center;
  color: #EAEAEA;

  @media screen and (max-width: ${props => props.theme.breakpoints.xxl}){
    font-size: ${props => props.theme.fontSizes['xxl']};
    font-size: ${props => props.theme.fontSizes['xxl']};
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: ${props => props.theme.fontSizes['xl']};
    font-size: ${props => props.theme.fontSizes['xl']};
  }
`;

export const LearnMoreButton = styled.a`
  background: #568B53;
  padding: 12px 50px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes['xl']};
  margin-top: 64px;
  transition: background 0.3s ease;

  &:hover {
    background: #466B43;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['lg']};
    margin-top: 48px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: ${props => props.theme.fontSizes['md']};
  }
`;