import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
// import TopNavbar from "../Components/Shared/TopNavbar/TopNavbar";
// import ScrollToTop from "../Components/ScrolltoTop/ScrolltoTop";

const Main = () => {
  return (
    <div>
      {/* <TopNavbar></TopNavbar> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
