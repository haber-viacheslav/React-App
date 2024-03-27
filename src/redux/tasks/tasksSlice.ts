import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { Task } from '../../types/types';
import { fetchTasks, addTask, updateTask, deleteTask } from './operations';

interface TasksState {
  items: Task[];
  isLoading: boolean;
  error: string | null;
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  } as TasksState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
          state.isLoading = false;
          state.error = null;
        }
      })
      .addMatcher(
        (action: Action<string>) =>
          action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
        state => {
          state.isLoading = true;
        }
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
