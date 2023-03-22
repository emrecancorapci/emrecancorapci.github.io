import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

/**
 * Router component
 * @description Contains the routes for the app.
 * @returns {React.Component} Router component
 */

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
