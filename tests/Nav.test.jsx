import { render, screen } from '@testing-library/react';
import Navigation from '../src/Components/Navigation';
import ActivePageProvider from '../src/Contexts/ActiveContext';

test('Renders nav title', () => {
  render(
    <ActivePageProvider>
      <Navigation />
    </ActivePageProvider>,
  );
  const linkElement = screen.getByText(/EMRE CAN ÇORAPÇI/i);
  expect(linkElement).toBeInTheDocument();
});
