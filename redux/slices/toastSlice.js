import { createSlice } from '@reduxjs/toolkit';

import { noteActions } from './noteSlice';
const {
  getNoteSucc,
  getNoteFail,
  postNoteSucc,
  postNoteFail,
  putNoteSucc,
  putNoteFail,
  deleteNoteSucc,
  deleteNoteFail,
} = noteActions;

const initialState = {
  isOpen: false,
  isSuccess: false,
  message: null,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    removeToast: () => ({
      isOpen: false,
      isSuccess: false,
      message: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNoteSucc, () => ({
        isOpen: true,
        isSuccess: true,
        message: 'get success',
      }))
      .addCase(getNoteFail, () => ({
        isOpen: true,
        isSuccess: false,
        message: 'get fail',
      }))
      .addCase(postNoteSucc, () => ({
        isOpen: true,
        isSuccess: true,
        message: 'post success',
      }))
      .addCase(postNoteFail, () => ({
        isOpen: true,
        isSuccess: false,
        message: 'post fail',
      }))
      .addCase(putNoteSucc, () => ({
        isOpen: true,
        isSuccess: true,
        message: 'put success',
      }))
      .addCase(putNoteFail, () => ({
        isOpen: true,
        isSuccess: false,
        message: 'put fail',
      }))
      .addCase(deleteNoteSucc, () => ({
        isOpen: true,
        isSuccess: true,
        message: 'delete success',
      }))
      .addCase(deleteNoteFail, () => ({
        isOpen: true,
        isSuccess: false,
        message: 'delete fail',
      }));
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;
