// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    userAccounts:[],
    loggedUser:{},
    isAuthenticated: false,
  },
  reducers: {
   
    userSignup: (state, action) => {
      state.userAccounts.push(action.payload)
      },

    userLogin: (state, action) => {
        state.loggedUser = action.payload;
        state.isAuthenticated = true;
      },
      userLogout: (state) => {
        state.loggedUser = {};
        state.isAuthenticated = false; 
      },

 
  },
});

export const { userLogin ,userSignup , userLogout} = counterSlice.actions;
export default counterSlice.reducer;
