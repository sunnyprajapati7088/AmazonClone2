import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    Auth: "",
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.Auth = action.payload;
    },
    removeUser: (state, action) => {
      console.log(action.payload);
      state.Auth = action.payload;
    },
  },
});
export const { addUser ,removeUser} = Auth.actions;
export default Auth.reducer;
