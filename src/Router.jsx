import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';

/**
 * Router component
 * @description Contains the routes for the app.
 * @returns {React.Component} Router component
 */

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<ContactMe />} />
    </Routes>
  );
}
