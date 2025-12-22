import "./Projects.css";
import { useState } from "react";
import { NavLink } from "react-router";
import GuardianPNG from "/src/assets/projects/guardian.png";
import BlossomhackPNG from "/src/assets/projects/blossomhack.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface projectAttribute {
  imagePath: string;
  subText: string;
  pageLink: string;
}

const pageJsonList = [
  {
    imagePath: GuardianPNG,
    subText: "Guardian SVC website",
    pageLink: "/guardian",
  },
  {
    imagePath: BlossomhackPNG,
    subText: "Blossomhack Website",
    pageLink: "/blossomhack",
  },
] as projectAttribute[];

const Projects = () => {
  // const navigate = useNavigate();
  const [pageLink, setPageLink] = useState<string>(pageJsonList[0].pageLink);

  return (
    <div className="slideshow">
      <h1>My Projects</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop
        swipeable
        emulateTouch
        renderItem={(item) => (
          <NavLink to={pageLink} target="_blank">
            {item}
          </NavLink>
        )}
        onChange={(index) => setPageLink(pageJsonList[index].pageLink)}
      >
        {pageJsonList.map((page) => (
          <div>
            <img src={page.imagePath} />
            <p className="legend">{page.subText}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
