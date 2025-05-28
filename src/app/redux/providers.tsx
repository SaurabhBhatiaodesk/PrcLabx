"use client"; // Add this line at the top
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Ensure the path is correct

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
