import { RootState } from '../store';
export const selectLists = (state: RootState) => state.lists.items;
export const selectListsIsLoading = (state: RootState) => state.lists.isLoading;
export const selectListsError = (state: RootState) => state.lists.error;
