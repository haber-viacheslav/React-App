import { createSlice } from '@reduxjs/toolkit';

const variantSlice = createSlice({
  name: 'variant',
  initialState: '',
  reducers: {
    setVariantValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setVariantValue } = variantSlice.actions;
export const variantReducer = variantSlice.reducer;
