import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import "./navbar.css";
import Container from "../Container/Container";

const Navbar = () => {
  const [isMenuDown, setIsMenuDown] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuDown(!isMenuDown);
  };

  const handleDropdownToggle = () => {
    setIsDown(!isDown);
  };

  return (
    <div className="h-24 flex items-center">
      <Container>
        <div className="navbar bg-base-100 w-full">
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
                <li className="sidebar">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="sidebar">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="sidebar">
                  <NavLink
                    to={""}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Sister Concern
                  </NavLink>
                </li>
                <li className="sidebar" onClick={handleMenuToggle}>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Our Team
                  </NavLink>
                </li>
                <li className="sidebar">
                  <NavLink
                    to={"/gallery"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Photo Gallery
                  </NavLink>
                </li>
                <li className="sidebar">
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
              <li className="relative" onClick={handleDropdownToggle}>
                <a className="sidebar">
                  Sister Concern
                  <span className={`${isDown && "rotate-180"}`}>
                    <MdKeyboardArrowDown size={18}/>
                  </span>
                </a>
                <div
                  className={`absolute top-[100%] bg-base-200 w-56 space-y-4 z-10 py-4 shadow-md hover:bg-white ${
                    isDown ? "block" : "hidden"
                  }`}
                >
                  <div className="dropdown-bar">
                    <Link to={"/directors"}>IGL Web</Link>
                  </div>
                  <div className="dropdown-bar">
                    <Link to={"/team"}>IGL Host</Link>
                  </div>
                  <div className="dropdown-bar">
                    <Link to={"/team"}>IGL Nework</Link>
                  </div>
                </div>
              </li>
              <li className="relative" onClick={handleMenuToggle}>
                <a className="sidebar">
                  Our Team
                  <span className={`${isMenuDown && "rotate-180"}`}>
                    <MdKeyboardArrowDown size={18}/>
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
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
