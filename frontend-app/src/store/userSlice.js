import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUserName: (state, action) => {
      if (state.user) {
        state.user.userName = action.payload;
      }
    },
  },
});

export const { loginSuccess, setUser, updateUserName, logout } = userSlice.actions;

export default userSlice.reducer;
