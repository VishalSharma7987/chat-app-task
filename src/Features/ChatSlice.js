
import { createSlice } from '@reduxjs/toolkit';

const initialMessages = [
  { text: "Hello! How are you?", user: "User 2", time: new Date().toLocaleTimeString() },
  { text: "I'm good, thanks! How about you?", user: "User 1", time: new Date().toLocaleTimeString() },
  { text: "What are you up to today?", user: "User 2", time: new Date().toLocaleTimeString() },
];

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: initialMessages, // Initialize with dummy data
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
