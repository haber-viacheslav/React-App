import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { List } from '../../types/types';
import { fetchLists, addList, updateList, deleteList } from './operations';

interface ListsState {
  items: List[];
  isLoading: boolean;
  error: string | null;
}

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  } as ListsState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchLists.fulfilled, (state, action: PayloadAction<List[]>) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addList.fulfilled, (state, action: PayloadAction<List>) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateList.fulfilled, (state, action: PayloadAction<List>) => {
        const index = state.items.findIndex(
          list => list.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      })
      .addCase(deleteList.fulfilled, (state, action: PayloadAction<List>) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
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

export const listsReducer = listsSlice.reducer;
