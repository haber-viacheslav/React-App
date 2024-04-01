import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { IHistory } from '../../types/types';
import { fetchHistory } from './operations';

interface IHistoryState {
  items: IHistory[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IHistoryState = {
  items: [],
  isLoading: false,
  error: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchHistory.fulfilled,
        (state, action: PayloadAction<IHistory[]>) => {
          state.items = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action: Action<string>) =>
          action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
        state => {
          state.isLoading = true;
        }
      );
  },
});

export const historyReducer = historySlice.reducer;
