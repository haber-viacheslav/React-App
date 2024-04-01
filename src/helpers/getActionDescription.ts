import { IHistory } from '../types/types';
export const getActionDescription = (history: IHistory): string => {
  const { action, fieldName, oldValue, newValue } = history;
  let description = '';

  switch (action) {
    case 'POST':
      description = `You added (${fieldName}) to ${newValue}`;
      break;
    case 'PUT':
      description = `You changed the priority (${fieldName}) from ${oldValue} to ${newValue}`;
      break;
    case 'renamed':
      description = `You renamed (${oldValue}) to ${newValue}`;
      break;
    case 'moved':
      description = `You moved (${fieldName}) from ${oldValue} to ${newValue}`;
      break;
    case 'DELETE':
      description = `You deleted (${fieldName}) from ${oldValue}`;
      break;
    default:
      description = 'Unknown action';
      break;
  }

  return description;
};
