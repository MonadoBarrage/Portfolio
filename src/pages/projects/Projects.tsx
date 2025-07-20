import "./Projects.css";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { RiLoader4Fill } from "react-icons/ri";
import ErrorProject from "/src/assets/error.avif";
import { NavLink } from "react-router";
import GuardianPNG from "/src/assets/guardian.png";
import BlossomhackPNG from "/src/assets/blossomhack.png";

interface projectAttribute {
  imagePath: string;
  subText: string;
  pageLink: string;
}

class ProjectSlide implements projectAttribute {
  imagePath: string;
  subText: string;
  pageLink: string;

  constructor(imagePath: string, subText: string, pageLink: string) {
    this.imagePath = imagePath;
    this.subText = subText;
    this.pageLink = pageLink;
  }
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
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [slide, setSlide] = useState<ProjectSlide>();
  const [slideshow, setSlideShow] = useState<ProjectSlide[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const handlePageChange = (toLeft: boolean) => {
    if (pageJsonList.length == 0) return;

    if (toLeft) {
      if (pageNumber <= 0) setPageNumber(pageJsonList.length - 1);
      else setPageNumber(pageNumber - 1);
    } else {
      if (pageNumber >= pageJsonList.length - 1) setPageNumber(0);
      else setPageNumber(pageNumber + 1);
    }
  };

  const changeSlideshow = () => {
    if (pageJsonList.length == 0 || !slideshow) {
      return;
    }

    setSlide(slideshow[pageNumber]);
  };

  useEffect(() => {
    setLoading(true);
    const projectList = [] as ProjectSlide[];
    pageJsonList.map((page) => {
      projectList.push(
        new ProjectSlide(page.imagePath, page.subText, page.pageLink),
      );
    });

    if (projectList.length == 0) {
      projectList.push(
        new ProjectSlide(ErrorProject, "Error: No projects available", "/"),
      );
    }
    setSlideShow(projectList);
    setSlide(projectList[0]);
    setPageNumber(0);
    setLoading(false);
  }, [pageJsonList]);

  useEffect(() => {
    changeSlideshow();
  }, [pageNumber]);

  if (loading) {
    return (
      <div>
        Loading projects...
        <RiLoader4Fill className="loading" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <button onClick={() => handlePageChange(true)}>
        <FaArrowAltCircleLeft />
      </button>
      {slide && (
        <div>
          <h1>My Projects</h1>
          <h2>
            <div>{slide.subText}</div>
            <NavLink to={slide.pageLink} target="_blank">
              <img src={slide.imagePath} alt={slide.subText} />
            </NavLink>
            <h6>Click on picture to see more details</h6>
          </h2>
        </div>
      )}

      <button onClick={() => handlePageChange(false)}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default Projects;
