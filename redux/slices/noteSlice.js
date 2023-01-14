import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    getNote: (state, action) => {},
    getNoteSucc: (state, action) => ({ ...state, ...action.payload }),
    getNoteFail: (state) => state,

    postNote: (state, action) => {},
    postNoteSucc: (state, action) => ({ ...state, ...action.payload }),
    postNoteFail: (state) => state,

    putNote: (state, action) => {},
    putNoteSucc: (state, action) => ({ ...state, ...action.payload }),
    putNoteFail: (state) => state,

    deleteNote: (state, action) => {},
    deleteNoteSucc: (state, action) => {
      delete state[action.payload.id];
    },
    deleteNoteFail: (state) => state,
  },
});

export const noteActions = noteSlice.actions;
export default noteSlice.reducer;
