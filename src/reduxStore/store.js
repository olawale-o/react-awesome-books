import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from "redux";
import rootReducer from './rootReducer';

const configStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// use this when you import createStore
// const store = createStore(bookReducer);

export default configStore;
