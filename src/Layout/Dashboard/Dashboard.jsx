import { NavLink, Outlet} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  MdAddAPhoto,
  MdContentPasteGo,
  MdOutlineContactPhone,
  MdOutlineDashboard,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHome, FaUsers } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";
import "./style.css";
import { FcSelfServiceKiosk } from "react-icons/fc";
const Dashboard = () => {
  //   const { user, userLogOut } = useAuth();
  //   const navigate = useNavigate();
  //   const handleLogout = () => {
  //     userLogOut();
  //     console.log("user");
  //     navigate("/");
  //   };

//   const isAdmin = true;

  const navbar = (
    <>
      <li className="sidebar">
        <NavLink to="/">
          <span className="flex items-center gap-2">
            <FaHome size={20} />
            Home
          </span>
        </NavLink>
      </li>

      <li>
        <span className="flex items-center gap-2 hover:cursor-pointer">
          <MdOutlineLogout size={20} />
          Logout
        </span>
      </li>
    </>
  );
  return (
    <div>
      <div className="h-20 bg-base-300 flex items-center">
        <div className="container mx-auto flex items-center gap-10">
          <div>
            <img src={logo} className="w-16 h-16" alt="" />
          </div>
          <div>
            <a className=" text-xl text-bold">IGL Group</a>
          </div>
        </div>
      </div>
      <div className="flex text-base">
        <div className="w-72 bg-base-100 min-h-screen border-r-2">
          <div className="flex flex-col items-center space-y-3 pt-10 pb-5 text-base border-y-2 px-2">
            <img src="" className="h-16 border rounded-full w-16" alt="" />

            <h2 className="text-lg">{<>example12@gmail.com</>}</h2>
          </div>
          <div className="py-8 border-b-2  px-10">
            <ul className="list-none space-y-4">
              <li className="sidebar">
                <NavLink to={"/dashboard/admin"}>
                  <span className="flex items-center gap-2">
                    <MdOutlineDashboard size={20} />
                    Dashboard
                  </span>
                </NavLink>
              </li>

              <li className="sidebar">
                <NavLink to={"/admin/addservice"}>
                  <span className="flex items-center gap-2">
                    <FcSelfServiceKiosk size={18} />
                    Add Service
                  </span>
                </NavLink>
              </li>
              <li className="sidebar">
                <NavLink to={"/admin/addsubmenu"}>
                  <span className="flex items-center gap-2 text-base">
                    <MdContentPasteGo size={16} />
                    Add Submenu
                  </span>
                </NavLink>
              </li>
              <li className="">
                <span className="flex items-center gap-2 pl-2">
                  <FaUsers size={18} />
                  About Us
                </span>
                <ul className="list-none pl-4 py-2">
                  <li className="sidebar">
                    <NavLink to={"/admin/addabout"}>
                      <span className="flex items-center gap-2 text-base">
                        <MdContentPasteGo size={16} />
                        Add Content
                      </span>
                    </NavLink>
                  </li>

                  <li className="sidebar">
                    <NavLink to={"/admin/addsubmenudata"}>
                      <span className="flex items-center gap-2 text-base">
                        <MdContentPasteGo size={16} />
                        Add Submenu Content
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="">
                <span className="flex items-center gap-2 pl-2">
                  <FaUsers size={18} />
                  Sister Concern
                </span>
                <ul className="list-none pl-4 py-2">
                  <li className="sidebar">
                    <NavLink to={"/admin/partner"}>
                      <span className="flex items-center gap-2 text-base">
                        <MdContentPasteGo size={16} />
                        Add Content
                      </span>
                    </NavLink>
                  </li>
                 
                  <li className="sidebar">
                    <NavLink to={"/dashboard/payments"}>
                      <span className="flex items-center gap-2 text-base">
                        <MdContentPasteGo size={16} />
                        Add Submenu Content
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="">
                <span className="flex items-center gap-2 pl-2">
                  <FaUsers size={18} />
                  Our Team
                </span>
                <ul className="list-none pl-4 py-2">
                  <li className="sidebar">
                    <NavLink to={"/dashboard/payments"}>
                      <span className="flex items-center gap-2 text-base">
                        <MdContentPasteGo size={16} />
                        Add Content
                      </span>
                    </NavLink>
                  </li>
                 
                  <li className="sidebar">
                    <NavLink to={"/dashboard/payments"}>
                      <span className="flex items-center gap-2 text-base">
                        <MdContentPasteGo size={16} />
                        Add Submenu Content
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="sidebar">
                <NavLink to={"/admin/addphoto"}>
                  <span className="flex items-center gap-2">
                    <MdAddAPhoto size={20} />
                    Add Photo
                  </span>
                </NavLink>
              </li>
              <li className="sidebar">
                <NavLink to={"/dashboard/payments"}>
                  <span className="flex items-center gap-2">
                    <MdOutlineContactPhone size={20} />
                    Add Contact Details
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none space-y-4  px-10 py-8">{navbar}</ul>
          </div>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
