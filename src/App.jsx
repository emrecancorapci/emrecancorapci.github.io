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

  transition: max-height 0.3s ease-out, padding-top 0.3s ease-out;
  max-height: 0;
  &.active {
    @media (min-width: 768px) {
      padding-top: 100px;
    }
    @media (max-width: 767px) {
      padding-top: 180px;
    }

    @media (min-width: 985px) {
      max-height: ${(props) => props.webHeight};
    }
    @media (max-width: 984px) {
      max-height: ${(props) => props.mobileHeight};
    }
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
      <nav className="container-fluid p-0">
        <Navigation />
      </nav>
      <main>
        <Page className={`bg-dark ${activePage === 'home' ? 'active' : ''}`} webHeight="250vh" mobileHeight="450vh">
          <Home />
        </Page>
        <Page
          className={`bg-black ${activePage === 'projects' ? 'active' : ''}`}
          webHeight="250vh"
          mobileHeight="450vh"
        >
          <Projects />
        </Page>
        <Page
          className={`bg-ice ${activePage === 'contact me' ? 'active' : ''}`}
          webHeight="100vh"
          mobileHeight="120vh"
        >
          <ContactMe />
        </Page>
      </main>
      <footer className="container-fluid">
        <Footer />
      </footer>
    </>
  );
}
