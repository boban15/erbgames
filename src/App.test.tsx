import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ERB Games website', () => {
  render(<App />);
  const titleElement = screen.getByText(/Welcome to ERB Games/i);
  expect(titleElement).toBeInTheDocument();
});
