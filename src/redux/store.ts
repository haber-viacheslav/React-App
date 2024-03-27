import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { variantReducer } from './variant/variantSlice';
import { listsReducer } from './lists/listsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    variant: variantReducer,
    lists: listsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
