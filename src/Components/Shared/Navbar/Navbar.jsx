import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import "./navbar.css";
import Container from "../Container/Container";

const Navbar = () => {
  const [isMenuDown, setIsMenuDown] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [barActive, setBarActive] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBarActive(true);
      } else {
        setBarActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuDown(!isMenuDown);
  };

  const handleDropdownToggle = () => {
    setIsDown(!isDown);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuDown(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close dropdowns on route change
    setIsMenuDown(false);
    setIsDown(false);
  }, [location]);

  return (
    <div
      className={`h-24 flex items-center bg-base-100 z-50 w-full ${
        barActive && "navbar-fixed "
      }`}
    >
      <Container>
        <div className="navbar w-full">
          <div className="navbar-start max-w-max">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="relative" ref={dropdownRef}>
                  <a className="sidebar" onClick={handleDropdownToggle}>
                    Sister Concern
                    <span className={`${isDown && "rotate-180"}`}>
                      <MdKeyboardArrowDown size={18} />
                    </span>
                  </a>
                  <div
                    className={`absolute top-[100%] bg-base-200 w-56 space-y-4 z-10 py-4 shadow-md hover:bg-white ${
                      isDown ? "block" : "hidden"
                    }`}
                  >
                    <div className="dropdown-bar">
                      <Link to={"https://iglweb.com/web/"}>IGL Web</Link>
                    </div>
                    <div className="dropdown-bar">
                      <Link to={"/team"}>IGL Host</Link>
                    </div>
                    <div className="dropdown-bar">
                      <Link to={"/team"}>IGL Nework</Link>
                    </div>
                  </div>
                </li>
                <li className="relative" ref={menuRef}>
                  <a className="sidebar" onClick={handleMenuToggle}>
                    Our Team
                    <span className={`${isMenuDown && "rotate-180"}`}>
                      <MdKeyboardArrowDown size={18} />
                    </span>
                  </a>
                  <div
                    className={`absolute top-[100%] bg-base-200 w-56 z-10 space-y-4 py-4 shadow-md hover:bg-white ${
                      isMenuDown ? "block" : "hidden"
                    }`}
                  >
                    <div className="dropdown-bar ">
                      <Link to={"/directors"}>Board of Director</Link>
                    </div>
                    <div className="dropdown-bar">
                      <Link to={"/team"}>Board of Officer/Staff</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink
                    to={"/gallery"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Photo Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <a className="">
              <img src={logo} className="h-20 w-16" alt="IGL Group Logo" />
            </a>
          </div>
          <div className="navbar-end hidden flex-1 lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="relative" ref={dropdownRef}>
                <a className="sidebar" onClick={handleDropdownToggle}>
                  Sister Concern
                  <span className={`${isDown && "rotate-180"}`}>
                    <MdKeyboardArrowDown size={18} />
                  </span>
                </a>
                <div
                  className={`absolute top-[100%] bg-base-200 w-56 space-y-4 z-10 py-4 shadow-md hover:bg-white ${
                    isDown ? "block" : "hidden"
                  }`}
                >
                  <div className="dropdown-bar">
                    <Link to={"/iglweb"}>IGL Web</Link>
                  </div>
                  <div className="dropdown-bar">
                    <Link to={"/iglhost"}>IGL Host</Link>
                  </div>
                  <div className="dropdown-bar">
                    <Link to={"/iglnetwork"}>IGL Nework</Link>
                  </div>
                </div>
              </li>
              <li className="relative" ref={menuRef}>
                <a className="sidebar" onClick={handleMenuToggle}>
                  Our Team
                  <span className={`${isMenuDown && "rotate-180"}`}>
                    <MdKeyboardArrowDown size={18} />
                  </span>
                </a>
                <div
                  className={`absolute top-[100%] bg-base-200 w-56 z-10 space-y-4 py-4 shadow-md hover:bg-white ${
                    isMenuDown ? "block" : "hidden"
                  }`}
                >
                  <div className="dropdown-bar">
                    <NavLink to={"/directors"} className={({ isActive }) =>
                    isActive ? "sidebar activedropdown-bar" : "sidebar"
                  }>Board of Director</NavLink>
                  </div>
                  <div className="dropdown-bar">
                    <NavLink to={"/team"} className={({ isActive }) =>
                    isActive ? "sidebar activedropdown-bar" : "sidebar"
                  }>Board of Officer/Staff</NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to={"/gallery"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  Photo Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
