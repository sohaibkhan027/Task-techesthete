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
      editAndUpdateUser(state, action) {
        const { email, updatedData } = action.payload;
        console.log("updatedData ", updatedData);
        const getUser = state.userAccounts.findIndex(user => user.email === email);
        if (getUser !== -1) {
          state.userAccounts[getUser] = { ...state.userAccounts[getUser], ...updatedData };
          state.loggedUser = { ...state.loggedUser, ...updatedData };
        }
      },
      deleteUser(state, action) {
        const userId = action.payload;
        state.userAccounts = state.userAccounts.filter(user => user.email !== userId);
      },

 
  },
});

export const { userLogin ,userSignup , userLogout,editAndUpdateUser ,deleteUser} = counterSlice.actions;
export default counterSlice.reducer;
