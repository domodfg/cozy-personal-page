import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectDetail = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".projectdetail"),
      {
        y: -20,
      },
      {
        y: 0,
        scrollTrigger: {
          scroller: ".projectlist",
          trigger: element.querySelector(".project"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <li className="project" ref={ref}>
      <img className="projectdetail" src={props.image} alt="project" />
      <div className="projectdescription">lorem ipsum weofjsjodfho</div>
    </li>
  );
};

export default ProjectDetail;
