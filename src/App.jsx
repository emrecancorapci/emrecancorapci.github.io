import styled from 'styled-components';

import { useActive } from './Contexts/ActiveContext';

import Footer from './Components/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';

const Page = styled.div`
  padding: 0;
  overflow-y: ${(props) => (props.overflow ? 'scroll' : 'hidden')}};
  overflow-x: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;
  &.active {
    max-height: 80vh;
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
      <nav className="row bg-black">
        <div className="col">
          <Navigation />
        </div>
      </nav>
      <main>
        <Page className={`container-fluid bg-sugar ${activePage === 'home' ? 'active' : ''}`}>
          <Home />
        </Page>
        <Page className={`container-fluid bg-black ${activePage === 'projects' ? 'active' : ''}`} overflow>
          <Projects />
        </Page>
        <Page className={`container-fluid bg-ice ${activePage === 'contact me' ? 'active' : ''}`}>
          <ContactMe />
        </Page>
      </main>
      <footer className="row p-4 bg-black">
        <Footer />
      </footer>
    </>
  );
}
