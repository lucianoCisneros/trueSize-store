import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import App from './App';

vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(() => ({})),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  collection: vi.fn(),
  getDocs: vi.fn(() => Promise.resolve({ size: 0, docs: [] })),
  addDoc: vi.fn(() => Promise.resolve()),
}));

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/trueSize-store/');
  });

  it('muestra la navegación principal', async () => {
    render(<App />);
    expect(await screen.findByRole('navigation')).toBeInTheDocument();
  });
});
