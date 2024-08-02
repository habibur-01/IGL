import { useLocation } from "react-router-dom";
import PageBanner from "../../Components/Shared/PageBanner/PageBanner";
import bgimage from "../../assets/images/about.jpg";
import Container from "../../Components/Shared/Container/Container";

const AboutUs = () => {
  const location = useLocation();
  const pagePath = location.pathname.split("/")[1];
  return (
    <div>
      <PageBanner image={bgimage} path={pagePath} title={'About Us'}></PageBanner>
      <Container>
        <div className="my-24">
          <div className="flex justify-center items-center gap-4 h-10 w-36 bg-[#ffffff] rounded-lg shadow-lg">
            <p className="h-2 w-2 rounded-full bg-[#ff4900]"></p>
            <p className="text-base font-semibold tracking-wider uppercase">
              About us
            </p>
            <p className="h-2 w-2 rounded-full bg-[#ff4900]"></p>
          </div>
          <div className="my-10 flex justify-center">
            <div className="w-[700px]">
              <h1 className="text-[40px] mb-4">
                <span className="text-[#ff4900]">Introduction</span> To About
                IGL Group Ltd!
              </h1>
              <p>
                We can help you from concept to design to all the way for
                deployment. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vitae esse ducimus ad non, quos explicabo deserunt itaque
                fugiat numquam eligendi.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-[60%] ml-10 bg-[#ff4900] p-14 text-white">
                <h1 className="text-2xl font bold mb-4">Our Mission & Vission</h1>
                <p>
                  Company vision is to enable people at all levels to reach the
                  appropriate, advanced, ultimate computer-based technologies
                  and solutions through an affordable and agreeable means.
                </p>
              </div>
            </div>
          </div>
        </div>
       <div>
         <div className="grid grid-cols-2 gap-12 h-max mb-24">
          <div className="h-[350px] w-[550px] rounded-lg overflow-hidden">
            <img src={bgimage} alt="" className="w-full h-full rounded-lg" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="space-y-8 ">
              <h1 className="text-[40px]">
                World’s Best{" "}
                <span className="text-[#ff4900]">Engineering & IT</span>
                <br />
                Solution Provider.
              </h1>
              <p className="w-[70%] ">
                We have been serving IT services in the local & international
                markets with great fame. We can help you from concept to design
                to all the way for deployment.
              </p>
              <h1 className="text-2xl font-bold uppercase">
                MD MOIN UDDIN,{" "}
                <span className="text-[#ff4900]">CEO & FOUNDER</span>
              </h1>
            </div>
          </div>
        </div>
       </div>
      </Container>
    </div>
  );
};

export default AboutUs;
