import { RootState } from '../store';
export const selectTasks = (state: RootState) => state.tasks.items;
export const selectTasksIsLoading = (state: RootState) => state.tasks.isLoading;
export const selectTasksError = (state: RootState) => state.tasks.error;
