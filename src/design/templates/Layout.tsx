import type { ReactNode } from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Navbar />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}