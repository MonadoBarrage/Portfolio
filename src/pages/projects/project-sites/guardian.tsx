import "./project-sites.css";
import GuardianPNG from "/src/assets/projects/guardian.png";
import { NavLink } from "react-router-dom";
const Guardian = () => {
  return (
    <div>
      <h1>Guardian SVC Website</h1>

      <img
        src={GuardianPNG}
        className="project-pic"
        alt="Guardian website dashboard"
      />
      <div className="divider">May 2025 - Present</div>
      <p className="project-text">
        During the summer of 2025, I had an amazing opportunity to work for
        Skycop Inc., an organization dedicated to developing solutions for
        license plate detection for use in law enforcement agencies and private
        companies. I first worked on revamping the frontend website to use AWS
        Amplify, a comprehensive full stack development tool that handles both
        UI and database calls in one package. The goal was for it to display
        license plate reads in a variety of ways, from pins on maps that expand
        for more detail and correspond to their respective coordinates to a
        slideshow of cards where users can apply filters to curate selected
        reads. As it stood, the original website had an outdated design that was
        not user-friendly to navigate through and needed updates in how it
        processed license plate data. I designed the UI elements for the reads
        and implemented real time tracking of license plate data in the
        dashboard. Along with the team lead of our project, we reworked the AWS
        DynamoDB database to clean up unneccessary fields and implement
        security/safety policies as described in our core objectives. We then
        added additional business logic to separate license plate reads per
        company based on camera id, user privileges, and more.
      </p>
      <p className="project-text">
        I also worked on updating and writing new applications in an AWS EC2
        Linux server that was used to process raw data from camera systems into
        usable license plate data that can be pushed into AWS DynamoDB for
        internal use and our own website. With guidance from a senior developer
        in Linux server development, I reformatted each C++ application to fit
        in with the new database changes and implemented queueing for faster
        processing of data within each application. I additionally implemented a
        notification system that users can subscribe to that alerts them
        whenever a license plate number is processed into the system. These apps
        were then implemented into the systemd service configurations to
        automatically run when the server starts up initially or on subsequent
        reboots.
      </p>
      <p className="project-text">
        After these changes were implemented, the Linux EC2 server can process
        over 100,000 reads per day and insert them into the DynamoDB database.
        Optimizations within each application ultimately resulted in a 5
        millisecond insertion process for each read, which is lightning fast
        compared to the 100 millisecond interval that it originally took to
        process a single piece of data. The website is also able to track all
        this data into a user-friendly dashboard website for companies to use as
        best fit.
      </p>
      <hr />
      <NavLink to={"/"}>
        <button>Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default Guardian;
