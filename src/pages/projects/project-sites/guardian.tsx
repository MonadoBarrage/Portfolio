import GuardianPNG from "/src/assets/guardian.png";
import { NavLink } from "react-router-dom";
const Guardian = () => {
  return (
    <div>
      <h1>Guardian SVC Website</h1>
      A test for dedicated webpage per project
      <img src={GuardianPNG} alt="Guardian" />
      <NavLink to={"/"}>
        <button>Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default Guardian;
