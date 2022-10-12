import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectDetail = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".projectdescription"),
      {
        y: 100,
      },
      {
        y: 0,
        scrollTrigger: {
          scroller: document.querySelector(".projectlistContainer"),
          trigger: element,
          start: "top top",
          end: "bottom center",
          ease: "power3.out",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <li className="project" ref={ref}>
      <img className="projectimage" src={props.image} alt="project" />
      <div className="projectdescription">{props.text}</div>
    </li>
  );
};

export default ProjectDetail;
