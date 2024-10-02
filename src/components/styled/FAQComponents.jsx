import styled from 'styled-components';

export const FAQSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E1F3D9;
  width: 100%;
  padding: 130px 105px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    padding: 130px 72px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 130px 48px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 130px 24px;
  }
`

export const FAQTitle = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
  text-align: center;
  color: #072B2B;
  margin-bottom: 64px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['xxxxxl']};
    line-height: 4rem;
  }
`;

export const FAQContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-content: center;
  max-width: 1280px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FAQItem = styled.div`
  background-color: white;
  padding: 20px;
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Question = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  outline: none;
`;

export const Answer = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #666;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease;
  opacity: 0;

  ${props => props.$isOpen && `
    max-height: fit-content;
    opacity: 1;
    margin-top: 10px;
  `}
`;

export const PlusMinusIcon = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;