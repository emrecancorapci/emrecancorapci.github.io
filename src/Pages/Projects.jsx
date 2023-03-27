import Card from '../Components/Card';
import ProjectCard from '../Components/ProjectCard';

import projects from '../Data/projects.json';

export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col py-2">
          <p className="text-center text-white h07">PROJECTS:</p>
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-lg-6 col-md-12 p-3">
            <Card>
              <ProjectCard data={project} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
