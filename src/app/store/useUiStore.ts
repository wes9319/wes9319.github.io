import { create } from 'zustand';

interface UiState {
  isMobileMenuOpen: boolean;
  theme: 'light' | 'dark';
  toggleMobileMenu: () => void;
  setTheme: (theme: UiState['theme']) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMobileMenuOpen: false,
  theme: 'dark',
  toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  setTheme: (theme) => set({ theme }),
}));