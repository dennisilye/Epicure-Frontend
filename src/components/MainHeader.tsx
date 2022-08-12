import userIcon from "../assets/img/user-icon.svg";
import bagIcon from "../assets/img/bag-icon.svg";
import Logo from "../assets/img/logo.jpg";
import Hamburger from "../assets/img/hamburger.svg";
import { Input } from "./Input";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export const MainHeader = () => {
  const [isSmallNavOpen, setIsSmallNavOpen] = useState(false);

  const handleSmallNavbarClick = () => {
    setIsSmallNavOpen((state) => !state);
  };

  return (
    <header className="home-layout">
      <nav className="flex align-center justify-content space-between">
        <div className="hamburger-wrapper flex align-center space-between">
          <div className="hamburger-container pointer">
            <img
              onClick={handleSmallNavbarClick}
              src={Hamburger}
              alt="Hamburger-navbar"
            />
          </div>
          <div className="logo-container flex align-center justify-content">
            <Link to={"/"} className="home-link">
              <img className="logo" src={Logo} alt="Logo" />
            </Link>
            <ul className="links flex ">
              <li>
                <Link to={"/"} className="home-link">
                  EPICURE
                </Link>
              </li>
              <li>
                <NavLink to={"/restaurants"}>Restaurants</NavLink>
              </li>
              <li>
                <NavLink to={"/chefs"}>Chefs</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-container flex">
          <Input propClassName={"header-search"} />
          <img src={userIcon} alt="" />
          <img src={bagIcon} alt="" />
        </div>
      </nav>
      {/* Mobile navbar */}
      <div
        onClick={handleSmallNavbarClick}
        className={`mobile-menu ${isSmallNavOpen ? "open-menu" : ""}`}
      >
        <div className="btn-container">
          <button>X</button>
        </div>
        <section className="mobile-menu-content flex justify-center column align-center">
          <Link to={"/chefs"} className="home-link bold">
            Chefs
          </Link>
          <Link to={"/restaurants"} className="home-link bold">
            All Restaurants
          </Link>
          <div className="menu-line"></div>
          <a>Sign In</a>
          <a>Contact Us</a>
          <a>Terms of Use</a>
        </section>
      </div>
    </header>
  );
};
