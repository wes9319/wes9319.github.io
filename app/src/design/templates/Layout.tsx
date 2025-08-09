import type { ReactNode } from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}