import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';

/**
 * App component
 * @description This is the main component of the app. It contains the Navbar, the Router and the Footer.
 * @returns {JSX.Element} App
 */

export default function App() {
  return (
    <>
      <nav className="row bg-black">
        <div className="col">
          <Navigation />
        </div>
      </nav>
      <main>
        <div className="row">
          <div className="col">
            <Home />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Projects />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ContactMe />
          </div>
        </div>
      </main>
      <footer className="row mt-4">
        <Footer />
      </footer>
    </>
  );
}
