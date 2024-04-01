import { RootState } from '../store';
export const selectVariant = (state: RootState) => state.modal.variant;
export const selectIsOpen = (state: RootState) => state.modal.isOpen;
export const selectIsOpenActionMenu = (state: RootState) =>
  state.modal.isOpenActionMenu;
export const selectCurrentTask = (state: RootState) => state.modal.task;
export const selectCurrentList = (state: RootState) => state.modal.list;
