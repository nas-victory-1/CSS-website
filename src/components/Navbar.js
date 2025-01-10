import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getRoute = () => {
    switch (location.pathname) {
      case "/":
      case "/resources":
      case "/members":
        return "nav-white";
      case "/events":
      case "/contact":
        return "nav-black";
      default:
        return "nav-white";
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className="navbar"
      style={
        dropdownOpen ? { backgroundColor: "rgba(74, 48, 243, 0.804)" } : {}
      }
    >
      <Link to="/">
        {dropdownOpen ? (
          <img
            src="/assets/cssLogoWhite.png"
            className="navbarLogo"
            alt="Society's Logo"
          />
        ) : (
          <img
            src="/assets/cssLogo.png"
            className="navbarLogo"
            alt="Society's Logo"
          />
        )}
      </Link>
      <div className={`${getRoute()} visibility`}>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/members">Members</Link>
        <Link to="/contact">Contact</Link>
        <Link>
          <FaSearch />
        </Link>
      </div>
      <div className={`${getRoute()} toggler`}>
        <Link onClick={toggleDropdown}>
          {dropdownOpen ? <IoMdClose /> : <VscThreeBars />}
        </Link>
      </div>

      {dropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-search">
            <input type="text" placeholder="Search..." className="search-bar" />
            <FaSearch color="white" />
          </div>
          <Link to="/" onClick={() => setDropdownOpen(false)}>
            Home
          </Link>
          <Link to="/events" onClick={() => setDropdownOpen(false)}>
            Events
          </Link>
          <Link to="/resources" onClick={() => setDropdownOpen(false)}>
            Resources
          </Link>
          <Link to="/members" onClick={() => setDropdownOpen(false)}>
            Members
          </Link>
          <Link to="/contact" onClick={() => setDropdownOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
