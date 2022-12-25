import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    get: (state, action) => action.memos,
    post: () => {},
    put: () => {},
    remove: () => {},
  },
});

export default blogSlice.reducer;

export const blogActions = blogSlice.actions;
