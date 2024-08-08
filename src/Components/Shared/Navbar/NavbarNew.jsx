import { RiMenu2Line } from "react-icons/ri";
import logo from "../../../assets/images/logo.png";
import Container from "../Container/Container";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./style.css";
import { useEffect, useRef, useState } from "react";

const NavbarNew = () => {
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
    <div className={`h-24 w-full z-50 bg-base-100 flex items-center ${barActive && "navbar-fixed"}`}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="hidden">
              <RiMenu2Line size={30} />
              <div></div>
            </div>

            <div>
              <a className="#">
                <img src={logo} className="h-20 w-16" alt="IGL Group Logo" />
              </a>
            </div>
          </div>
          <div className="menubar">
            <ul>
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
                  About Us{" "}
                </NavLink>
              </li>
              <li className="relative" ref={dropdownRef}>
                <a className="sidebar" onClick={handleDropdownToggle}>
                  Sister Concern
                  <span className={`${isDown && "rotate-180"}`}>
                    <MdKeyboardArrowDown size={18} className="inline-block"/>
                  </span>
                </a>
                <div
                  className={`absolute top-[100%] bg-base-200 w-56 space-y-4 z-10 p-4 shadow-md hover:bg-white ${
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
                    <MdKeyboardArrowDown size={18} className="inline-block" />
                  </span>
                </a>
                <div
                  className={`absolute top-[100%] bg-base-200 w-56 z-10 space-y-4 p-4 shadow-md ${
                    isMenuDown ? "block" : "hidden"
                  }`}
                >
                  <div className="dropdown-bar">
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

export default NavbarNew;
