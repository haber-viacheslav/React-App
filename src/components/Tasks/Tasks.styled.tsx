import styled from 'styled-components';
import { IStyledPriorityProps } from '../../types/types';
export const StyledTasks = styled.ul`
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

export const StyledTaskItem = styled.div`
  width: 340px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  flex-direction: column;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  @media screen and (${props => props.theme.media.lg}) {
    width: 295px;
  }
`;
export const StyledTaskHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledTaskTitle = styled.h3`
  font-size: 16px;
`;

export const StyledTaskDescription = styled.p`
  color: ${props => props.theme.colors.lightGrey};
`;

export const TaskFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTaskDueDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

export const StyledTaskPriority = styled.div<IStyledPriorityProps>`
  position: relative;
  max-width: 100px;
  padding: 2px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.clearWhite};
  background-color: ${props => {
    return props.priority
      ? props.theme.colors.badgeBg[props.priority]
      : props.theme.colors.lightGrey;
  }};
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 12px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => {
      return props.priority
        ? props.theme.colors.badge[props.priority]
        : props.theme.colors.lightGrey;
    }};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;
