import Marquee from "react-fast-marquee";
import Container from "../Shared/Container/Container";
// import icon1 from "../../assets/images/partners/1.png";
// import icon2 from "../../assets/images/partners/2.png";
// import icon3 from "../../assets/images/partners/3.png";
// import icon4 from "../../assets/images/partners/4.png";
import icon5 from "../../assets/images/polycon.png";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const OurPartner = () => {
  return (
    <div className="my-24">
      <SectionTitle
        heading="Our Valuable Partner"
        subHeading="Delivering Excellence Together"
      ></SectionTitle>
      <div className="mt-14">
        <Container>
          <Marquee pauseOnHover direction="left">
            <div className=" text-black mx-8 h-16 w-44 bg-white shadow-md">
              <img src={icon5} alt="" className="overflow-hidden" />
            </div>
            <div className=" text-black mx-8 h-16 w-44 bg-white shadow-md">
              <img src={icon5} alt="" className="overflow-hidden" />
            </div>
            <div className=" text-black mx-8 h-16 w-44 bg-white shadow-md">
              <img src={icon5} alt="" className="overflow-hidden" />
            </div>
            <div className=" text-black mx-8 h-16 w-44 bg-white shadow-md">
              <img src={icon5} alt="" className="overflow-hidden" />
            </div>
            <div className=" text-black mx-8 h-16 w-44 bg-white shadow-md">
              <img src={icon5} alt="" className="overflow-hidden" />
            </div>
          </Marquee>
        </Container>
      </div>
    </div>
  );
};

export default OurPartner;
