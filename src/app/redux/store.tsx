import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice'; // Ensure the path is correct

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

// Type for the store's dispatch function and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
