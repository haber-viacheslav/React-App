import styled from 'styled-components';

export const StyledSelect = styled.select`
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

export const StyledOption = styled.option`
  font-size: 14px;
  color: ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;
