import { createContext, useMemo, useContext, useState } from 'react';

const ActiveContext = createContext();

export const useActive = () => useContext(ActiveContext);

export default function ActivePageProvider({ children }) {
  const [activePage, setActivePage] = useState('Home');

  const props = useMemo(() => ({ activePage, setActivePage }), [activePage, setActivePage]);
  return <ActiveContext.Provider value={props}>{children}</ActiveContext.Provider>;
}
