import Card from '../Components/Card';
import ProjectCard from '../Components/ProjectCard';

const projects = [
  {
    title: 'YET ANOTHER BLOG PROJECT',
    technologies: [
      'LAYERED​ARCHITECTURE',
      '.NET7',
      'ENTITY​FRAMEWORK',
      'POSTGRESQL',
      'REACT',
      'BOOTSTRAP',
      'TYPESCRIPT',
      'FONT​AWESOME',
      'VITE',
    ],
    source: 'https://github.com/emrecancorapci/YetAnotherBlogProject_Frontend',
  },
  {
    title: 'JOBS API',
    technologies: ['NODEJS', 'EXPRESSJS', 'MONGODB'],
    source: 'https://github.com/emrecancorapci/express_jobs-api',
  },
  {
    title: 'BLOG PROJECT',
    technologies: ['SVELTEKIT', 'BOOTSTRAP', 'VITE'],
    source: 'https://github.com/emrecancorapci/express_jobs-api',
  },
  {
    title: 'CHESS CONSOLE APP',
    technologies: ['JUST C++'],
    source: 'https://github.com/emrecancorapci/cpp_chess',
  },
];

export default function Projects() {
  return (
    <div className="bg-black py-4">
      <div className="container bg-black">
        <div className="row">
          <div className="col">
            <p className="text-center text-white h09">PROJECTS:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12 p-3">
            <Card>
              <ProjectCard data={projects[0]} />
            </Card>
          </div>
          <div className="col-12 col-lg-6 col-md-12 p-3">
            <Card>
              <ProjectCard data={projects[1]} />
            </Card>
          </div>
          <div className="col-12 col-lg-6 col-md-12 p-3">
            <Card>
              <ProjectCard data={projects[2]} />
            </Card>
          </div>
          <div className="col-12 col-lg-6 col-md-12 p-3">
            <Card>
              <ProjectCard data={projects[3]} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
