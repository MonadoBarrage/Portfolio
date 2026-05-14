import "./project-sites.css";
import ArcadeStickPNG from "/src/assets/projects/arcadestick.jpg";
import { NavLink } from "react-router-dom";
const ArcadeStick = () => {
  return (
    <div>
      <h1>Arcade Game Controller</h1>

      <img
        src={ArcadeStickPNG}
        className="project-pic"
        alt="An arcade game controller which I use in fighting games"
      />
      <div className="divider">June 2025</div>

      <p className="project-text">
        I am an avid fan of fighting games such as Street Fighter or Guilty Gear
        ever since high school and play fighting games as a hobby of mines.
        During a college summmer, I decided to finally achieve one dream of
        mines I wanted to do: create my own fighting game controller similar to
        ones you would see in tournaments or akin to controllers you see in
        arcades. In order to create my own controller, I had to decided what
        type of electronic board would power it. I decided to use a Raspberry Pi
        as the basis and took a look at open source resources for how to program
        it as a controller. I had to take a look at board diagrams and crimped
        wires so that I can plug in the buttons with the correct sockets in the
        correct position on the Pi board. After much trial and error, I finally
        finished creating my controller and now use it as my default controller
        for fighting games.
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

export default ArcadeStick;
