import { render } from '@testing-library/react';
import ActivePageProvider from '../src/Contexts/ActiveContext';

function Wrapper({ children }) {
  return <ActivePageProvider>{children}</ActivePageProvider>;
}

const customRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
