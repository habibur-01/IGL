import { Link, useLocation } from "react-router-dom";
import PageBanner from "../../Components/Shared/PageBanner/PageBanner";
import pagepic from "../../assets/images/webpage.jpg";
// import ShowPageName from "../../Components/Shared/ShowPageName/ShowPageName";
import Container from "../../Components/Shared/Container/Container";
import logo from "../../assets/images/logo.png";
const WebPageDetails = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  const splitIndex = 3; // Length of "IGL"
  const part1 = pathName.slice(0, splitIndex).toUpperCase();
  const part2 = pathName.slice(splitIndex);
  const part2Capitalized =
    part2.charAt(0).toUpperCase() + part2.slice(1).toLowerCase();
  const routeName = part1 + " " + part2Capitalized;
  console.log(routeName);
  return (
    <div>
      <PageBanner
        image={pagepic}
        path={routeName}
        title={routeName}
      ></PageBanner>
      <Container>
        {/* <div className="my-20 flex justify-center">
          <ShowPageName pageName={routeName}></ShowPageName>
        </div> */}
        <div className="flex justify-between items-center gap-20 my-20">
          <div className="w-[40%] flex justify-end">
            <div className="w-[400px] h-auto">
              <img src={logo} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex justify-end flex-1 h-auto">
            <div className="space-y-8">
              <h1 className="text-[40px] font-bold">
                About <span className="text-[#ff4900]">{routeName}</span> Ltd.
              </h1>
              <p className="w-[80%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis molestiae et corporis eaque quasi quae in aspernatur
                odio doloremque blanditiis pariatur corrupti expedita unde, quia
                ex vero natus voluptatum consectetur quo quam commodi sint
                ducimus? Porro nobis aspernatur explicabo maxime minima. Facere,
                saepe maxime! Officia voluptatibus cupiditate in qui temporibus?
              </p>
              <Link to={"https://iglweb.com/web/"} target="_blank"><button className="btn bg-[#ff4900] w-32 mt-8 text-white text-base rounded-full hover:bg-transparent hover:text-black hover:border-[1px] hover:border-[#ff4900]">
                Visit Website
              </button></Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WebPageDetails;
