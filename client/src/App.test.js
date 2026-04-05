import { render, screen } from '@testing-library/react';
import App from './App';

test('renders resume headings and projects section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Mohammad Al Bataineh/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^Projects$/i, level: 2 })).toBeInTheDocument();
});

