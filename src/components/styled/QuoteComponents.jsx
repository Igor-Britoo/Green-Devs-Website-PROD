import styled from 'styled-components';

export const QuoteSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #E1F3D9;
  width: 100%;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes['xxxl']};
  text-align: center;
  color: #072B2B;
  max-width: 1280px;
  padding: 48px 100px;

  @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
    font-size: ${props => props.theme.fontSizes['xxl']};
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    padding: 48px 50px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    font-size: ${props => props.theme.fontSizes['xl']};
  }
`