import { RootState } from '../store';
export const selectHistory = (state: RootState) => state.history.items;
export const selectHistoryIsLoading = (state: RootState) =>
  state.history.isLoading;
export const selectHistoryError = (state: RootState) => state.history.error;
