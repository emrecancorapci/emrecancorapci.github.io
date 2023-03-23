import ProjectCard from '../Components/ProjectCard';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12">
          <ProjectCard />
        </div>
        <div className="col-6">
          <h1 className="text-white">DIV2</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
