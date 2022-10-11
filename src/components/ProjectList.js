import "../styles/ProjectList.css";
import ProjectArray from "./ProjectArray.js";
import ProjectDetail from "./ProjectDetail.js";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectList() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const scrollerRef = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const scroller = scrollerRef.current;
    gsap.fromTo(
      element,
      {
        y: 50,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: element,
          scroller: scroller,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div className="projectlistContainer">
      <nav>My Projects</nav>
      <ul className="projectlist" ref={scrollerRef}>
        {ProjectArray.map((project) => {
          return (
            <div>
              <div className="test"></div>
              <ProjectDetail image={project.image} />
              <div className="test"></div>
              <div className="test"></div>
              <div className="test"></div>
              <div className="test"></div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectList;
