import styled from 'styled-components';
export const StyledLists = styled.ul`
  width: 340px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow-x: hidden;
  white-space: normal;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    gap: 20px;
    width: 700px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    font-size: 18px;
    width: 1260px;
    gap: 20px;
  }
`;
export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 340px;
  flex-basis: calc((100% - 20px) / 1);

  @media screen and (${props => props.theme.media.md}) {
    flex-basis: calc((100% - 20px) / 2);
    font-size: 16px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    flex-basis: calc((100% - 20px) / 4);
  }
`;

export const StyledItem = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media screen and (${props => props.theme.media.lg}) {
    width: 295px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledListTitle = styled.h2`
  font-size: 14px;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
  }
`;

export const StyledCounter = styled.p`
  font-weight: ${props => props.theme.fontWeights.semibold};
`;
