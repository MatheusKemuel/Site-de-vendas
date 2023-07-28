import insta from "../assets/images/instagram.png";
import face from "../assets/images/facebook.png";
import github from "../assets/images/github.png";
import lnkdn from "../assets/images/linkedin.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className="footer-container text-white font-bold grid lg:grid-cols-3 sm:grid-cols-1">
        <div className="c1 w-full flex justify-center items-center text-5xl">
          <a href="/">
            <p>EasyBuy</p>

          </a>
          
        </div>
        <div className="c2 w-full flex justify-center items-end">
          <p className="text-center mb-5">
            &copy; 2023 EasyBuy | All rights reserved
          </p>
        </div>
        <div className="c3 lg:h-64 md:h-32 sm:h-32 w-full flex justify-center items-center">
          <div className="flex justify-between items-center socials gap-5">
            <a href="https://www.instagram.com/matheuskemuel/">
              <img src={insta} alt="" />
            </a>
            <a href="https://www.facebook.com/matheus.kemuel.5">
              <img src={face} alt="" />
            </a>
            <a href="https://github.com/MatheusKemuel">
              <img src={github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/matheus-kemuel-a037871b2/">
              <img src={lnkdn} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
