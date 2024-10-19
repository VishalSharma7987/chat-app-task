
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../Features/ChatSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export default store;
