import styled from 'styled-components';

export const AboutUsSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E1F3D9;
  width: 100%;
  padding: 130px 105px;
  gap: 50px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    padding: 130px 72px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    gap: 36px;
    padding: 130px 48px;
  }
`

export const AboutUsTitle = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
  text-align: center;
  color: #072B2B;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['xxxxxl']};
    line-height: 4rem;
  }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes['xxxl']};
  text-align: center;
  color: #072B2B;
  max-width: 1280px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    font-size: ${props => props.theme.fontSizes['xxl']};
  }
`