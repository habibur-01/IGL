import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OurTeam from "../Pages/OurTeam/OurTeam";
import BoardDirectors from "../Pages/BoardDirectors/BoardDirectors";
import Gallery from "../Pages/Gallery/Gallery";
import WebPageDetails from "../Pages/WebPageDetails/WebPageDetails";
import TeamMemberDetails from "../Pages/TeamMemberDetails/TeamMemberDetails";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import GalleryDetails from "../Pages/Gallery/GalleryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/team",
        element: <OurTeam></OurTeam>
      },
      {
        path: "/directors",
        element: <BoardDirectors></BoardDirectors>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/iglweb",
        element: <WebPageDetails></WebPageDetails>
      },
      {
        path: "/personalInfo/:id",
        element: <TeamMemberDetails></TeamMemberDetails>
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: "/gallery/:year",
        element: <GalleryDetails></GalleryDetails>
      }
    ],
  },
]);
export default router;
