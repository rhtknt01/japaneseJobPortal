import { FaAngleRight, FaFacebook } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="grid">
        <div className="box">
          <h3>quick links</h3>
          <NavLink className="title" to="/">
            <FaAngleRight />
            <span>home</span>
          </NavLink>
          <NavLink className="title" to="/about">
            <FaAngleRight />
            <span>about</span>
          </NavLink>
          <NavLink className="title" to="/alljobs">
            <FaAngleRight />
            <span>all jobs</span>
          </NavLink>
          <NavLink className="title" to="alljobs">
            <FaAngleRight />
            <span>filter search</span>
          </NavLink>
        </div>
        <div className="box">
          <h3>extra links</h3>
          <NavLink className="title" to="/account">
            <FaAngleRight />
            <span>account</span>
          </NavLink>
          <NavLink className="title" to="/account">
            <FaAngleRight />
            <span>login</span>
          </NavLink>
          <NavLink className="title" to="/account">
            <FaAngleRight />
            <span>register</span>
          </NavLink>
          <NavLink className="title" to="/contact">
            <FaAngleRight />
            <span>contact</span>
          </NavLink>
          <NavLink className="title" to="/">
            <FaAngleRight />
            <span>dashboard</span>
          </NavLink>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a className="title" href="#">
            <FaFacebook />
            <span>facebook</span>
          </a>
          <a className="title" href="#">
            <FaSquareXTwitter />
            <span>x</span>
          </a>
          <a className="title" href="#">
            <FaSquareInstagram />
            <span>instagram</span>
          </a>
          <a className="title" href="#">
            <FaLinkedin />
            <span>linkedin</span>
          </a>
          <a className="title" href="#">
            <FaYoutube />
            <span>youtube</span>
          </a>
        </div>
      </section>
      <div className="credit"><p className="title">&copy; copyright @2024 by <span>Rohit Kunte</span> | all rights reserved!</p></div>
    </>
  );
};
export default Footer;
