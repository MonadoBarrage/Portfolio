import "./Error.css";
import { NavLink } from "react-router-dom";
import ErrorPNG from "/src/assets/error.png";
const Error = () => {
  return (
    <div>
      <img src={ErrorPNG} alt="Funny Error" />

      <h3>
        Oopsies! There's an error here. Click below to get back on the right
        track.
      </h3>
      <NavLink to={"/"}>
        <button>Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default Error;
