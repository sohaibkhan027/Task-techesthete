// // userReducer.js
// const initialState = {
//   userAccounts: [],
//   loggedUser: {},
//   isAuthenticated: false
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_SIGNUP:
//       return {
//         ...state,
//         userAccounts: [...state.userAccounts, action.payload]
//       };
//     case USER_LOGIN:
//       return {
//         ...state,
//         loggedUser: action.payload,
//         isAuthenticated: true
//       };
//     case USER_LOGOUT:
//       return {
//         ...state,
//         loggedUser: {},
//         isAuthenticated: false
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;
