import { BrowserRouter } from 'react-router-dom';

/**
 * @description This is the wrapper for the tests. It contains the BrowserRouter and the LangProvider.
 * @param {JSX.Element} { children }
 * @return {JSX.Element}
 */
export default function TestWrapper({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
