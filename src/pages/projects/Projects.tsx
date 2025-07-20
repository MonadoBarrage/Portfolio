import "./Projects.css";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { RiLoader4Fill } from "react-icons/ri";
import ErrorProject from "/src/assets/error.avif";

interface pageAttribute {
  imagePath: string;
  subText: string;
}

class ProjectSlide implements pageAttribute {
  imagePath: string;
  subText: string;

  constructor(imagePath: string, subText: string) {
    this.imagePath = imagePath;
    this.subText = subText;
  }
}

const pageJsonList = [
  {
    imagePath: "/src/assets/guardian.png",
    subText: "Guardian SVC website",
  },
  {
    imagePath: "/src/assets/blossomhack-page.png",
    subText: "Blossomhack Website",
  },
] as pageAttribute[];

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
      projectList.push(new ProjectSlide(page.imagePath, page.subText));
    });

    if (projectList.length == 0) {
      projectList.push(
        new ProjectSlide(ErrorProject, "Error: No projects available"),
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
        <h2>
          <div>{slide.subText}</div>
          <img src={slide.imagePath} alt={slide.subText} />
        </h2>
      )}

      <button onClick={() => handlePageChange(false)}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default Projects;
