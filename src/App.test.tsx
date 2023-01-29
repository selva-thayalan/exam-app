import React from 'react';
import { render, screen } from '@testing-library/react';
import ApplicationRoute from './Application';

test('renders learn react link', () => {
  render(<ApplicationRoute />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
