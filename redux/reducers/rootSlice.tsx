import { createSlice } from "@reduxjs/toolkit";

export const rootReducer = createSlice({
  name: "root",
  initialState: {
    loading: true,
    userInfo: {},
  },
  reducers: {
    setLoading: (state: { loading: any; }, action: { payload: any; }) => {
      state.loading = action.payload;
    },
    setUserInfo: (state: { userInfo: any; }, action: { payload: any; }) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLoading, setUserInfo } = rootReducer.actions;
export default rootReducer.reducer;