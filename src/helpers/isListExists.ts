import { IList } from '../types/types';
export const isListExists = (lists: IList[], values: IList) => {
  return lists.find(
    list => list.listName.toLowerCase() === values.listName.trim().toLowerCase()
  );
};
