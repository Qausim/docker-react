import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I just changed this code. Is it working\?/i);
  expect(linkElement).toBeInTheDocument();
});
