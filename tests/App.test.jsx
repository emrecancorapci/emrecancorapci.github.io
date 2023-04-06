import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from './test-util';
import App from '../src/App';

describe('App', () => {
  test('renders the navigation component', () => {
    render(<App />);
    const navigationElement = screen.getByRole('navigation');
    expect(navigationElement).toBeInTheDocument();
  });

  test('renders the home page by default', () => {
    render(<App />);
    const homePageElement = screen.getByText(/Hello! I'm a Software Developer from Turkey/i);
    expect(homePageElement).toBeInTheDocument();
  });

  test('renders the projects page when the projects link is clicked', () => {
    render(<App />);
    const projectsLinkElement = screen.getByRole('button', { name: /projects/i });
    userEvent.click(projectsLinkElement);
    const projectsPageElement = screen.getByText(/YET ANOTHER BLOG PROJECT BACKEND/i);
    expect(projectsPageElement).toBeInTheDocument();
  });

  test('renders the contact me page when the contact me link is clicked', () => {
    render(<App />);
    const contactMeLinkElement = screen.getByRole('button', { name: /contact me/i });
    userEvent.click(contactMeLinkElement);
    const contactMePageElement = screen.getByText(/SUBJECT:/i);
    expect(contactMePageElement).toBeInTheDocument();
  });

  test('renders the footer component', () => {
    render(<App />);
    const footerElement = screen.getByText(/©2023 Emre Can Çorapçı/i);
    expect(footerElement).toBeInTheDocument();
  });
});
