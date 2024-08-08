import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import NavbarNew from "../Components/Shared/Navbar/NavbarNew";

const Main = () => {
  return (
    <div>
      <NavbarNew></NavbarNew>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
