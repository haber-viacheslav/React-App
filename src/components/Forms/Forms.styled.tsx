import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
export const FormWrap = styled(Form)`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FormInputWrp = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormLabel = styled.span`
  font-size: 16px;
`;

export const FormInput = styled(Field)`
  font-size: 18px;
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
  transform: translateY(60px);
  color: ${({ theme }) => theme.colors.red};
`;

export const FormButton = styled.button`
  display: inline-flex;
  align-self: flex-end;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  color: #0c0404;
  border-radius: 100%;
  transition: 400ms box-shadow ease-out;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  }
`;
