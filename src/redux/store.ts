import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { modalReducer } from './modal/modalSlice';
import { listsReducer } from './lists/listsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
    lists: listsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
