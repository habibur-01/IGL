import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import software from "../../assets/images/monitor.png";
import "./style.css";
import Container from "../Shared/Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { TiDeviceDesktop } from "react-icons/ti";

AOS.init({
  delay: 400,
});

const SisterConcern = () => {
  return (
    <div className="service-container py-20">
      <SectionTitle
        heading={"Innovative Solutions for Your Business Needs"}
        subHeading={`Empowering Your Business with Expert Solutions for Sustainable Growth and Success, Tailored to Meet Your Unique Needs and Drive Innovation.`}
      ></SectionTitle>
      <Container>
        <div
          className="flex justify-center mt-16"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="grid grid-cols-3 gap-10">
            <div className="w-96 service-card p-8 shadow-md">
              <div className="logo-container w-16 h-16 rounded-md mb-4 bg-[#ffffff] flex justify-center items-center">
                {/* <img src={software} alt="" className="w-8 h-8" /> */}
                <TiDeviceDesktop size={30} className="text-[#ff4900] icon" />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">Software Services</h1>
                <p className="text-base opacity-90">
                  Offering custom mobile app solutions and cross-platform app
                  development with ongoing maintenance and support.
                </p>
              </div>
            </div>
            <div className="w-96 service-card p-8 bg-[#ffffff] border-l-[1px] border-t-[1px] border-[#ff4900]">
              <div className="logo-container w-16 h-16 rounded-md mb-4 bg-[#ff4900] flex justify-center items-center">
                <TiDeviceDesktop size={30} className="text-[#ffffff]" />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">Software Services</h1>
                <p className="text-base opacity-90">
                  Offering custom mobile app solutions and cross-platform app
                  development with ongoing maintenance and support.
                </p>
              </div>
            </div>
            <div className="w-96 service-card p-8 shadow-md">
              <div className="logo-container w-16 h-16 rounded-md mb-4 bg-[#ffffff] flex justify-center items-center">
                <TiDeviceDesktop size={30} className="text-[#ff4900] icon" />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">Software Services</h1>
                <p className="text-base opacity-90">
                  Offering custom mobile app solutions and cross-platform app
                  development with ongoing maintenance and support.
                </p>
              </div>
            </div>
            <div className="w-96 service-card p-8 shadow-md">
              <div className="logo-container w-16 h-16 rounded-md mb-4 bg-[#ffffff] flex justify-center items-center">
                <TiDeviceDesktop size={30} className="text-[#ff4900] icon" />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">Software Services</h1>
                <p className="text-base opacity-90">
                  Offering custom mobile app solutions and cross-platform app
                  development with ongoing maintenance and support.
                </p>
              </div>
            </div>
            <div className="w-96 service-card p-8 shadow-md bg-[rgb(255, 240, 235, 1)]">
              <div className="logo-container w-16 h-16 rounded-md mb-4 bg-[#ffffff] flex justify-center items-center">
                <TiDeviceDesktop size={30} className="text-[#ff4900] icon" />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">Software Services</h1>
                <p className="text-base opacity-90">
                  Offering custom mobile app solutions and cross-platform app
                  development with ongoing maintenance and support.
                </p>
              </div>
            </div>
            <div className="w-96 service-card p-8 shadow-md bg-[rgb(255, 240, 235, 1)]">
              <div className="logo-container w-16 h-16 rounded-md mb-4 bg-[#ffffff] flex justify-center items-center">
                <TiDeviceDesktop size={30} className="text-[#ff4900] icon" />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">Software Services</h1>
                <p className="text-base opacity-90">
                  Offering custom mobile app solutions and cross-platform app
                  development with ongoing maintenance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SisterConcern;
