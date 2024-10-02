import styled from "styled-components";
import servicesBackground from '../../assets/services-background.svg';

export const FormContainer = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 100px 150px;
  border-radius: 10px;
  width: 100%;
  gap: 24px;
  background: url(${servicesBackground});
  background-size: cover;
  background-attachment: fixed;
  background-position-x: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    padding: 100px 120px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    padding: 100px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 100px 64px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 100px 40px;
  }
`;

export const FormTitle = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 32px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['xxxxxl']};
    line-height: 4rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 1280px;
`

export const InputLabel = styled.label`
  color: #fff;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 700;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  color: #FFF;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 400;
  transition: border 0.1s;

  &::placeholder {
    color: #757575;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid #B3B3B3;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 400;
  transition: border 0.1s;

  &::placeholder {
    color: #757575;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid #B3B3B3;
  }
`;

export const InvestmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InvestmentValue = styled.p`
  color: #fff;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 400;
  margin: 0;
`

export const RangeInput = styled.input.attrs({ type: "range" })`
  width: 100%;
  appearance: none;
  height: 10px;
  background: #6ca773; /* Track color */
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    background: #6ca773; /* Track color */
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #d4f5c4; /* Thumb color */
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px; /* Centers the thumb on the track */
    position: relative;
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #d4f5c4; /* Thumb color */
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }
`;

export const MarksContainer = styled.div`
  position: relative;
  width: calc(100% - 20px);
  height: 20px;
  margin-top: -12px;
  margin-left: 10px;
`;

export const Mark = styled.div`
  position: absolute;
  width: 3px;
  height: 14px;
  border-radius: 5px;
  background: #6ca773;
  top: 0;
  left: ${(props) => props.$position}%;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: #6ca773;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 600;
  margin-top: 48px;
  max-width: 1280px;

  &:hover {
    background-color: #5a8d5c;
  }
  &:disabled {
    background-color: #6ca773;
    cursor: not-allowed;
  }
`;

export const ErrorSpan = styled.span`
  color: #FF6347;
  font-size: ${props => props.theme.fontSizes['sm']};
  font-weight: 500;
`