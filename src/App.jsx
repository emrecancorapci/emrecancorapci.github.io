import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Router from './Router';

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
      <main className="row py-4">
        <div className="col">
          <Router />
        </div>
      </main>
      <footer className="row mt-4">
        <Footer />
      </footer>
    </>
  );
}
