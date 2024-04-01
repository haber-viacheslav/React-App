import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { modalReducer } from './modal/modalSlice';
import { listsReducer } from './lists/listsSlice';
import { historyReducer } from './history/historySlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
    lists: listsReducer,
    history: historyReducer,
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
