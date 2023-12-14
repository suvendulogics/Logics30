import reducer from '../reducer/reducer';
import tabReducer from '../reducer/TabReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer:{
    auth: reducer,
    tabReducer
  }
})
export default store;

