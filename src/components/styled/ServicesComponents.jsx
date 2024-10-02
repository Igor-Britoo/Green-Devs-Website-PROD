import styled from 'styled-components';
import servicesBackground from '../../assets/services-background.svg';
import defaultCardBackground from '../../assets/card-background.svg';
import centerCardBackground from '../../assets/center-card-background.svg';

export const ServicesSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url(${servicesBackground});
  background-size: cover;
  background-attachment: fixed;
  background-position-x: center;
  padding: 128px 0;
`

export const ServicesTitle = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['xxxxxl']};
    line-height: 4rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    width: 90%;
  }
`

export const Card = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 320px;
  padding: 32px 0;
  background-color: #FFF;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: url(${defaultCardBackground});
  background-repeat: no-repeat;
  background-position-x: center;

  ${props => props.$centerCard === 'true' && `
    margin-top: 72px;
    background: url(${centerCardBackground});
    background-repeat: no-repeat;
    background-position-x: center;
  `}

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    ${props => props.$centerCard === 'true' && `
      margin-top: 0;
    `}
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    width: 260px;
    height: 300px;
  }
`

export const CardIcon = styled.img`
  width: 74px;
  height: 74px;
`

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes['xxxl']};
  color: #FFF;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: ${props => props.theme.fontSizes['xxl']};
  }
`