import { FaFacebook, FaLinkedin } from "react-icons/fa";
import "./director.css";
import { FaSquareInstagram } from "react-icons/fa6";
import bgPic from "../../assets/images/concern1.jpg"
import member1 from "../../assets/images/member-3.jpg"
import Container from "../../Components/Shared/Container/Container";
import PageBanner from "../../Components/Shared/PageBanner/PageBanner";

const Directors = () => {
  return (
    <div>
      <PageBanner image={bgPic} path={"Directors"} title={"Directors"}></PageBanner>
      <div className="text-center mt-20 mb-10">
        <h1 className="text-[40px]">
          Board of
          <span className="text-[#ff4900]"> Directors </span>
        </h1>
        <p className="">
          Each member of our team is dedicated to delivering exceptional
          service, ensuring <br /> that your experience with us is nothing short
          of excellent.{" "}
        </p>
      </div>
      <Container>
        <div className="my-10">
          <div className="director-card-wraper">
            <div className="director-card">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src={member1}
                  alt=""
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="space-y-1 py-4">
                <h1 className="text-2xl font-bold uppercase">MD Moin Uddin</h1>
                <p className="text-base uppercase text-[#f17b4c]">CEO & Founder</p>
              </div>
            </div>
            <div className="director-details">
              <div className="inline-flex gap-6">
                <a href="">
                  <FaFacebook size={36} className="text-blue-500" />
                </a>
                <a href="">
                  <FaLinkedin size={36} className="text-[#0b65c3]" />
                </a>
                <a href="">
                  <FaSquareInstagram size={36} className="text-[#df54f8]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Directors;
