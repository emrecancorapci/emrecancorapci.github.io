import { createContext, useMemo, useContext, useState, useEffect } from 'react';

const ActiveContext = createContext();

export const useActive = () => useContext(ActiveContext);

export default function ActivePageProvider({ children }) {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const props = useMemo(() => ({ activePage, setActivePage }), [activePage, setActivePage]);
  return <ActiveContext.Provider value={props}>{children}</ActiveContext.Provider>;
}
