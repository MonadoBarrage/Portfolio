import "./Biography.css";
import ProfilePicture from "/src/assets/ProfilePic.jpg";

const Biography = () => {
  return (
    <>
      <p>
        Passionate computer scientist that explores everything from web
        development to ITS management, GIS mapping, and FPGA coding. As long as
        it is a concept that excites me and with the right guidance, I will
        explore it with a fervant passion and excitement.
        <br />
        <br />
        You can catch me hiking, rock climbing, playing in my local trading card
        game store, playing video games (both retro and new), and whatever else
        sounds like fun on my free time.
      </p>
      <img src={ProfilePicture} alt="profile picture" />
    </>
  );
};

export default Biography;
