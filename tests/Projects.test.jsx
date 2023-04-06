import { render } from '@testing-library/react';
import Projects from '../src/Pages/Projects';
import ProjectCard from '../src/Components/Project/ProjectCard';

test('renders projects title', () => {
  const { getByText } = render(<Projects />);
  const title = getByText(/PROJECTS/i);
  expect(title).toBeInTheDocument();
});

test('renders project cards', () => {
  const { getAllByTestId } = render(<Projects />);
  const cards = getAllByTestId('project-card');
  expect(cards.length).toBeGreaterThan(0);
});

test('renders project card title', () => {
  const project = {
    title: 'Test Project',
    technologies: ['React', 'Node.js'],
    source: 'https://example.com',
  };
  const { getByText } = render(<ProjectCard data={project} />);
  const title = getByText(/Test Project/i);
  expect(title).toBeInTheDocument();
});

test('renders project card technologies', () => {
  const project = {
    title: 'Test Project',
    technologies: ['React', 'Node.js'],
    source: 'https://example.com',
  };
  const { getByText } = render(<ProjectCard data={project} />);
  const tech1 = getByText(/React/i);
  const tech2 = getByText(/Node\.js/i);
  expect(tech1).toBeInTheDocument();
  expect(tech2).toBeInTheDocument();
});

test('renders project card source', () => {
  const project = {
    title: 'Test Project',
    technologies: ['React', 'Node.js'],
    source: 'https://example.com',
  };
  const { getByText } = render(<ProjectCard data={project} />);
  const source = getByText(/SOURCE/i);
  expect(source).toBeInTheDocument();
  expect(source).toHaveAttribute('href', 'https://example.com');
});

test('does not render project card source if no source provided', () => {
  const project = {
    title: 'Test Project',
    technologies: ['React', 'Node.js'],
  };
  const { queryByText } = render(<ProjectCard data={project} />);
  const source = queryByText(/SOURCE/i);
  expect(source).not.toBeInTheDocument();
});
