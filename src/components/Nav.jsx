import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import DarkMode from "../components/DarkMode";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div id="humburger">
        <nav className="navBar">
          <button className="hamburger-button" onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose style={{ width: "40px", height: "40px" }} />
            ) : (
              <FiMenu style={{ width: "40px", height: "40px" }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
            <li>
              <Link to={{ pathname: "https://example.com" }} target="_blank" onClick={() => closeMenu()}>
                Wordle Helper
              </Link>
            </li>
            <li>
              {" "}
              <Link to={{ pathname: "https://example.com" }} target="_blank" onClick={() => closeMenu()}>
                Spelling Bee Solver
              </Link>
            </li>
            <li>
              {" "}
              <Link to={{ pathname: "https://example.com" }} target="_blank" onClick={() => closeMenu()}>
                Letter Boxed Solver
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="nav-bar">
        <nav className="nav-bar">
          <Link className="button " to={{ pathname: "https://example.com" }} target="_blank">
            <span>Wordle Helper</span>
          </Link>
          <Link className="button " to={{ pathname: "https://example.com" }} target="_blank">
            <span>Spelling Bee Solver</span>
          </Link>
          <Link className="button " to={{ pathname: "https://example.com" }} target="_blank">
            <span>Letter Boxed Solver</span>
          </Link>
        </nav>
      </div>
      <DarkMode />
    </>
  );
};

export default Nav;
