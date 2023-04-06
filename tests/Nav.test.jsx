import { screen } from '@testing-library/react';
import { render } from './test-util';
import Navigation from '../src/Components/Navigation';

test('Renders nav title', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/EMRE CAN ÇORAPÇI/i);
  expect(linkElement).toBeInTheDocument();
});
