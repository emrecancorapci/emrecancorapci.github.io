import Card from '../Components/Common/Card';
import ProjectCard from '../Components/Project/ProjectCard';

import projects from '../Data/projects.json';

export default function Projects() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col py-2">
          <p className="text-center text-white h07">PROJECTS:</p>
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-lg-6 col-md-12 p-3">
            <div className="my-2 mx-4 h-100">
              <Card>
                <ProjectCard data={project} />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
