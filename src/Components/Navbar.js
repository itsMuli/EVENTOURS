import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaPlane, FaHome, FaAirbnb, FaCalendar, FaBook, FaGift } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaPlane className="navbar-icon" />
              EvenTours
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <FaHome className="navbar-icon" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/destinations"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <FaAirbnb className="navbar-icon" />
                  Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/packages"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <FaGift className="navbar-icon" />
                  Packages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/holidays"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <FaCalendar className="navbar-icon" />
                  Holidays
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/booking"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <FaBook className="navbar-icon" />
                  Booking
                </NavLink>
              </li>
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;