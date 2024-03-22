import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from './redux/store/StoreConfig';



// import counterReducer from './redux/slices/UserSlice';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });


//permanantly store value (PersistGate)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

