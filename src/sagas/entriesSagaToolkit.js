import { createSlice } from "@reduxjs/toolkit";
let entriesState = createSlice({
  name: "entries",
  initialState: [],
  reducers: {
    getApiData(state, action) {
      state = action.payload;
    },
  },
});
