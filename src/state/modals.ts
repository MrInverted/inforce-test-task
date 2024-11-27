import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",

  initialState: {
    isAddModal: false,
    isDeleteModal: false,
    isEditModal: false,
    isCardModal: false,
  },

  reducers: {
    setAddModal(state, action) {
      state.isAddModal = action.payload;
    },

    setDeleteModal(state, action) {
      state.isDeleteModal = action.payload;
    },

    setEditModal(state, action) {
      state.isEditModal = action.payload;
    },

    setCardModal(state, action) {
      state.isCardModal = action.payload;
    },
  }
});

export { modalSlice }

export const { setAddModal, setDeleteModal, setEditModal, setCardModal } = modalSlice.actions