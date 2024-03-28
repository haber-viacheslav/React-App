import { createSlice } from '@reduxjs/toolkit';
import { ModalVariant } from '../../types/types';
const variantSlice = createSlice({
  name: 'variant',
  initialState: ModalVariant.TaskDetails,
  reducers: {
    setVariantValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setVariantValue } = variantSlice.actions;
export const variantReducer = variantSlice.reducer;
