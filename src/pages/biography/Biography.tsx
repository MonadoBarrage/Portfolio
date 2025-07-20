import "./Biography.css";
import ProfilePicture from "/src/assets/thetechnician.png";

const Biography = () => {
  return (
    <>
      <p>
        I am an dedicated and experienced computer scientist/programmer. On my
        free time, I like to tinker around and play strategy games
      </p>
      <img src={ProfilePicture} alt="profile picture" />
    </>
  );
};

export default Biography;
