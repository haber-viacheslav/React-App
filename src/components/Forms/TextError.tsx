import React from 'react';
import { ITextErrorProps } from '../../types/types';
export const TextError: React.FC<ITextErrorProps> = ({ children }) => {
  return <div>{children}</div>;
};
