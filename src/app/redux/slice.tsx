"use client"; // Optional for certain frameworks like Next.js

import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
};

interface UsersState {
  users: User[];
  priceCat: number | null; // Add priceCat to the state
  uiFlag: boolean; 
}

const initialState: UsersState = {
  users: [],
  priceCat: null, // Initialize with null or a default value
  uiFlag: true,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      const data: User = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.users.push(data);
    },
    setPriceCat: (state, action: PayloadAction<number>) => {
      state.priceCat = action.payload; // Update priceCat in the state
    },
    setUiFlag: (state, action: PayloadAction<boolean>) => {
      state.uiFlag = action.payload;   
    },
  },
});

export const { addUser, setPriceCat,setUiFlag } = userSlice.actions;
export default userSlice.reducer;
