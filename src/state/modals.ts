import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",

  initialState: {
    isAddModal: false,
    isDeleteModal: false
  },

  reducers: {
    setAddModal(state, action) {
      state.isAddModal = action.payload;
    },

    setDeleteModal(state, action) {
      state.isDeleteModal = action.payload;
    }
  }
});

export { modalSlice };

export const { setAddModal, setDeleteModal } = modalSlice.actions;