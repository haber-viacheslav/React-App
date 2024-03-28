import styled from 'styled-components';

export const StyledAppBar = styled.div`
  padding: 20px 0;
  flex-direction: column;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  @media screen and (${props => props.theme.media.md}) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
`;
