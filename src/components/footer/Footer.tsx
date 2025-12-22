import "./Footer.css";
import githublogo from "/src/assets/logos/github-mark-white.svg";
import linkedinlogo from "/src/assets/logos/LI-In-Bug.png";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        Email: <a href="mailto:mt912321@ohio.edu">mt912321@ohio.edu</a>
      </div>
      <div>
        Phone: <a href="tel:+12672692667"> 267-269-2667 </a>
      </div>
      <div>
        Github:{" "}
        <a href="https://github.com/MonadoBarrage" target="_blank">
          https://github.com/MonadoBarrage
        </a>
      </div>
      <div>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/michael-t1/" target="_blank">
          https://www.linkedin.com/in/michael-t1/
        </a>
      </div>
      {/* <a href="mailto:mt912321@ohio.edu"><MdEmail className="footer-logo"/></a>
    <a href="tel:+12672692667"> <FaSquarePhone className="footer-logo"/> </a>
    <a href="https://github.com/MonadoBarrage" target="_blank"><img src={githublogo}/></a>
    <a href="https://www.linkedin.com/in/michael-t1/" target="_blank"><img src={linkedinlogo}/></a> */}
    </div>
  );
};

export default Footer;
