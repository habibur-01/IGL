import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavbarNew from "../Components/Shared/Navbar/NavbarNew";

const Main = () => {
  return (
    <div>
      <NavbarNew></NavbarNew>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
