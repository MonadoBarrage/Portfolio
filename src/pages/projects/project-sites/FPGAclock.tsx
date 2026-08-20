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
      <p className="project-text">
        In spring of 2026, I decided to join a class about embedded systems and
        discover what was it about on the whims of one of my electrical
        engineering friends. I soon enjoyed I have
      </p>
      <p className="project-text">
        I read several documents about the double dabble algorithm
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
