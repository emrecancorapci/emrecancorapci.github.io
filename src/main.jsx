import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ActivePageProvider from './Contexts/ActiveContext';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/**
 * Main component
 * @description This is the main component of the app. It contains the App component.
 * @returns {ReactDOM.Root} Main
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActivePageProvider>
      <App />
    </ActivePageProvider>
  </React.StrictMode>,
);
