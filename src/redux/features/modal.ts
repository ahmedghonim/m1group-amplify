 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  open: boolean;
}

const initialState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state: { open: boolean }, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;

export const modalState = (state: { modal: { open: boolean } }) =>
  state.modal.open;

export default modalSlice.reducer;
