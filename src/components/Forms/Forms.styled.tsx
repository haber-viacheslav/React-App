import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { IStyledRadioProps } from '@/types/types';
import DateView from 'react-datepicker';
export const FormWrap = styled(Form)`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
export const StyledFormWrap = styled(Form)`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormInputLabel = styled.label`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const InputWrp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 4px;
`;

export const FormInput = styled(Field)`
  font-size: 16px;
  padding: 4px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 2px;
  outline: none;
  color: ${({ theme }) => theme.colors.mainGrey};
  transition: 400ms box-shadow ease-in-out;
  &:focus,
  &:active {
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  }
`;

export const FormErrorMessage = styled(ErrorMessage)`
  position: absolute;

  color: ${({ theme }) => theme.colors.red};
`;

export const FormButton = styled.button`
  display: inline-flex;
  align-self: center;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  color: #0c0404;
  border-radius: 100%;
  transition: 400ms box-shadow ease-out, 300ms scale ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
    scale: 1.05;
  }
`;

export const StyledTextError = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const RadioContainer = styled.div`
  display: flex;
  height: 18px;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 32px;
`;

export const RadioInput = styled.input<IStyledRadioProps>`
  position: relative;
  height: 22px;
  width: 22px;
  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => {
      return props.bg
        ? props.theme.colors[props.bg]
        : props.theme.colors.midGrey;
    }};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid
      ${props => {
        return props.border
          ? props.theme.colors[props.border]
          : props.theme.colors.lightGrey;
      }};
  }
`;

export const RadioLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
`;

export const RadioOptionTitle = styled.label`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  display: flex;
  color: ${({ theme }) => theme.colors.midGrey};
  cursor: pointer;
`;

export const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: flex;
  color: ${({ theme }) => theme.colors.midGrey};
  cursor: pointer;
`;

export const SelectContainer = styled.div`
  padding: 14px 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const StyledError = styled.span`
  position: absolute;
  bottom: -12px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.red};
`;
export const StyledLabelTitle = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: flex;
  color: ${({ theme }) => theme.colors.midGrey};
  cursor: pointer;
`;
export const StyledDateContainer = styled(FormInput)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledDate = styled(DateView)`
  display: flex;
  align-items: baseline;
  gap: 20px;
  width: 120px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: 4px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 2px;
  outline: none;
  color: ${({ theme }) => theme.colors.mainGrey};
  transition: 400ms box-shadow ease-in-out;
  &:focus,
  &:active {
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  }
`;

export const FormTextField = styled(Field)`
  font-size: 16px;
  padding: 4px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 2px;
  outline: none;
  color: ${({ theme }) => theme.colors.mainGrey};
  transition: 400ms box-shadow ease-in-out;
  height: 46px;
  resize: none;
  &:focus,
  &:active {
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  }
`;

export const StyledFormSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  width: 310px;
  height: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.light};
  @media screen and (${props => props.theme.media.lg}) {
    width: 270px;
  }
`;

export const StyledSelectOption = styled.option`
  font-size: 14px;
  color: ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;
