import "./project-sites.css";
import BlossomhackPNG from "/src/assets/projects/blossomhack.png";
import { NavLink } from "react-router-dom";
const Blossomhack = () => {
  return (
    <div>
      <h1>Blossomhack Website</h1>

      <img src={BlossomhackPNG} alt="Blossomhack website" />
      <div className="divider">Oct 2022 - May 2025</div>
      <p className="project-text">
        During the spring semesters of 2023 and 2024, electrical engineering and
        computer science students in Ohio University hosted a hackathon called
        Blossomhack where people from within our college and those out of state
        and even out of the country could participate in various tracks to
        improve their technical expertise and meet with sponsors for potential
        job offers.
      </p>
      <p className="project-text">
        For Blossomhack, I worked on improving and updating their React
        Javascript website that was used to promote their event to students and
        sponsors. Initially, I added new features such as multi-page
        functionality to separate the standard landing page with the sponsors
        landing page and a mapping service to show the location of the event.
        However, eventually I encountered issues with outdated Javascript code
        and unsupported packages within the website. I thus decided to
        completely overhaul the entire system with a new frontend development
        tool called Vite.
      </p>
      <p className="project-text">
        I first examined the site and understand what the code was doing for
        each section. Once I throughly examined each section, I then rewrote it
        into the new website database. If there was code that relied on outdated
        libraries, I implemented my own version of that module as I did with the
        FAQ section of the website. I then fixed the website deployment process
        as the initial deployment process no longer worked in the new frontend
        tool. Next, I wrote new documentation that explained how to implement
        new features in a standard way, what each file did within the code
        database, and more both to help future developers to maintain the
        website as well as give a template for others who would want to fork and
        make their own version, just as we did when we forked Ottohack's website
        for use here.
      </p>
      <p className="project-text">
        Through revamping and fixing the Blossomhack website, we had around 100
        people in 2023 use the site to apply to the hackathon and later 200
        people in 2024. We had great feedback from users, saying it was easy to
        navigate and the overall structure of the site was impressive,
        especially for undergratuate students.
      </p>
      <hr />
      <NavLink to={"/"}>
        <button>Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default Blossomhack;
