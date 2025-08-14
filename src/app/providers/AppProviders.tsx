import type { ReactNode } from 'react';
import { HashRouter } from 'react-router-dom';
import '../../app/styles/global.scss';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <HashRouter>{children}</HashRouter>;
}
