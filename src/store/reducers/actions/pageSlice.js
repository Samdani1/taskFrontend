import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    current: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
