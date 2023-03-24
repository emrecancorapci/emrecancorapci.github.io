import styled from 'styled-components';

import { useActive } from './Contexts/ActiveContext';

import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';

/**
 * App component
 * @description This is the main component of the app. It contains the Navigation, Home, Projects and ContactMe components.
 * @returns {JSX.Element} App
 */

const Page = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: ${(props) => props.height};
  }
`;

export default function App() {
  const { activePage } = useActive();
  return (
    <>
      <nav className="row bg-black">
        <div className="col">
          <Navigation />
        </div>
      </nav>
      <main>
        <Page className={`row ${activePage === 'Home' ? 'active' : ''}`} height="80vh">
          <div className="col">
            <Home />
          </div>
        </Page>
        <Page className={`row ${activePage === 'Projects' ? 'active' : ''}`} height="100vh">
          <div className="col">
            <Projects />
          </div>
        </Page>
        <Page className={`row ${activePage === 'ContactMe' ? 'active' : ''}`} height="80vh">
          <div className="col">
            <ContactMe />
          </div>
        </Page>
      </main>
      <footer className="row mt-4">
        <Footer />
      </footer>
    </>
  );
}
