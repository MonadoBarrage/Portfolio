import "./project-sites.css";
import BlossomhackPNG from "/src/assets/projects/blossomhack.png";
import { NavLink } from "react-router-dom";
const FPGAClock = () => {
  return (
    <div>
      <h1>FPGA Clock with Double Dabble</h1>

      <img
        src={BlossomhackPNG}
        className="project-pic"
        alt="Display showing time and being powered by FPGA"
      />
      <div className="divider">May 2026</div>
      <p className="project-text">In spring of 2026, I decided to</p>
      <p className="project-text">
        For Blossomhack, I worked on improving and updating their React
        Javascript website that was used to promote their event to students and
        sponsors. Initially, I added new features such as multi-page
        functionality to separate the standard landing page with the sponsors
        landing page and a mapping service to show the location of the event.
        However, eventually I encountered issues with outdated Javascript code
        and unsupported packages within the website. I thus decided to
        completely overhaul the entire system with a new frontend development
        tool called Vite.
      </p>
      <p className="project-text"></p>
      <p className="project-text"></p>
      <hr />
      <NavLink to={"/"}>
        <button>Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default FPGAClock;
