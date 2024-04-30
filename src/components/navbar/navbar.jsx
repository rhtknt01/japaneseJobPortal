import Button from "../buttons/button";
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
  const pageid = useSelector((state)=>{
    return state.urlMapper.pageid;
  });
  const [toggle, setToggle] = useState(false);
  const [linkActive, setLinkActive] = useState(true);
  const handleActiveLink = () => {
    let elements = document.getElementsByClassName("active");
    elements[0].classList.remove("active");
    setLinkActive(!linkActive);
  };
  return (
    <section className="navbar">
      <div className="navcontainer">
        <div
          id="menubar"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <TiThMenu />
        </div>
        <div className="logobox">
          <img src={process.env.PUBLIC_URL + "images/about_us.jpg"} alt="fuji" />
          <p className="logo_name">山口尺长 工𠘨 丁卂尸卂𠘨</p>
        </div>
        <div
          className="navbox"
          style={toggle ? { left: "0" } : { left: "-101%" }}
        >
          <NavLink
            to="/"
            className={`navlinkstyle a ${
              linkActive ? "active" && setLinkActive(!linkActive) : ""
            }`}
            onClick={() => handleActiveLink}
          >
            home
          </NavLink>
          <NavLink
            to={`/alljobs/japan/${pageid}`}
            className={linkActive ? "navlinkstyle a active" : "navlinkstyle a"}
            onClick={() => handleActiveLink}
          >
            all jobs
          </NavLink>
          <NavLink
            to="/about"
            className={linkActive ? "navlinkstyle a active" : "navlinkstyle a"}
            onClick={() => handleActiveLink}
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            className={linkActive ? "navlinkstyle a active" : "navlinkstyle a"}
            onClick={() => handleActiveLink}
          >
            contact
          </NavLink>
          {/* <NavLink
            to="/account"
            className={linkActive ? "navlinkstyle a active" : "navlinkstyle a"}
            onClick={() => handleActiveLink}
          >
            account
          </NavLink> */}
        </div>
        <Button text="Add Resume" />
      </div>
      <div
        id="closer"
        style={toggle ? { display: "block" } : null}
        onClick={() => setToggle(!toggle)}
      >
        <FaTimes />
      </div>
    </section>
  );
};
export default Navbar;
