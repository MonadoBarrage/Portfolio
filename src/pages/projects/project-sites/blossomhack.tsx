import BlossomhackPNG from "/src/assets/blossomhack.png";
import { NavLink } from "react-router-dom";
const Blossomhack = () => {
  return (
    <div>
      <h1>Blossomhack Website</h1>
      A test for dedicated webpage per project
      <img src={BlossomhackPNG} alt="Guardian" />
      <NavLink to={"/"}>
        <button>Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default Blossomhack;
