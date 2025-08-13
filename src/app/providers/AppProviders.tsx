import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../app/styles/global.scss';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}