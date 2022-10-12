import "../styles/ProjectList.css";
import ProjectArray from "./ProjectArray.js";
import ProjectDetail from "./ProjectDetail.js";

function ProjectList() {
  return (
    <div className="mainpageright">
      <nav>My Projects</nav>
      <div className="projectlistContainer">
        <ul className="projectlist">
          {ProjectArray.map((project) => {
            return (
              <div>
                <ProjectDetail image={project.image} text={project.text} />
                <div className="test"></div>
                <div className="test"></div>
                <div className="test"></div>
                <div className="test"></div>
              </div>
            );
          })}
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default ProjectList;
