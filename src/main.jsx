import React from 'react';
import ReactDOM from 'react-dom/client';
import * as bootstrap from 'bootstrap';

import App from './App';
import ActivePageProvider from './Contexts/ActiveContext';

import './index.css';
import './scss/styles.scss';

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
