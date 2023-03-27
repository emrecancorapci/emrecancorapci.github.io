import styled from 'styled-components';

import { useActive } from './Contexts/ActiveContext';

import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';

const Page = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding: 0;
  overflow: hidden;

  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: ${(props) => props.height};
  }
`;

/**
 * App component
 * @description This is the main component of the app. It contains the Navigation, Home, Projects and ContactMe components.
 * @returns {JSX.Element} App
 */

export default function App() {
  const { activePage } = useActive();
  return (
    <>
      <nav className="row">
        <div className="col">
          <Navigation />
        </div>
      </nav>
      <main>
        <Page className={`bg-dark ${activePage === 'home' ? 'active' : ''}`} height="150vh">
          <div style={{ height: '6.6rem' }} />
          <Home />
        </Page>
        <Page className={`bg-black ${activePage === 'projects' ? 'active' : ''}`} height="400vh">
          <div style={{ height: '6.6rem' }} />
          <Projects />
        </Page>
        <Page className={`bg-ice ${activePage === 'contact me' ? 'active' : ''}`}>
          <div style={{ height: '6.6rem' }} />
          <ContactMe />
        </Page>
      </main>
      <footer className="row p-4 bg-black">
        <Footer />
      </footer>
    </>
  );
}
