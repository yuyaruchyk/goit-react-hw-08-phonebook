const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;