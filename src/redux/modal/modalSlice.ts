import { createSlice } from '@reduxjs/toolkit';
import { ModalVariant, Task, List } from '../../types/types';
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    variant: ModalVariant.TaskDetails,
    isOpen: false,
    isOpenActionMenu: false,
    task: {} as Task,
    list: {} as List,
  },
  reducers: {
    setVariantAndOpen(state, action) {
      const { variant } = action.payload;
      state.variant = variant;
      state.isOpen = true;
    },
    setModalClose(state, action) {
      state.isOpen = action.payload.isOpen;
    },
    setIsOpenActionMenu(state, action) {
      state.isOpenActionMenu = action.payload;
    },
    setCurrentTask(state, action) {
      state.task = action.payload.task;
    },
    setCurrentList(state, action) {
      state.list = action.payload.list;
    },
  },
});

export const {
  setVariantAndOpen,
  setModalClose,
  setIsOpenActionMenu,
  setCurrentTask,
  setCurrentList,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
