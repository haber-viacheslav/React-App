import { createSlice } from '@reduxjs/toolkit';
import { ModalVariant } from '../../types/types';
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    variant: ModalVariant.TaskDetails,
    isOpen: false,
    isOpenActionMenu: false,
  },
  reducers: {
    setVariantAndOpen(state, action) {
      const { variant } = action.payload;
      state.variant = variant;
      state.isOpen = true;
    },
    setVariantAndClose(state, action) {
      state.isOpen = action.payload.isOpen;
    },
    setIsOpenActionMenu(state, action) {
      state.isOpenActionMenu = action.payload;
    },
  },
});

export const { setVariantAndOpen, setVariantAndClose, setIsOpenActionMenu } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
