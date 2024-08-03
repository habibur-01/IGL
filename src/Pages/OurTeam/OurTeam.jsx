import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Container from "../../Components/Shared/Container/Container";
import PageBanner from "../../Components/Shared/PageBanner/PageBanner";
import teambg from "../../assets/images/concern.jpg";
import member1 from "../../assets/images/member-1.jpg";
import member2 from "../../assets/images/member-2.jpg";
import member3 from "../../assets/images/member-3.jpg";
import "./outeam.css";
import { FaSquareInstagram } from "react-icons/fa6";
import ShowPageName from "../../Components/Shared/ShowPageName/ShowPageName";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const id = 45
  return (
    <div>
      <PageBanner image={teambg} path={"team"} title={"Our Team"}></PageBanner>
      <div className="flex justify-center mt-20">
        <ShowPageName pageName={"Our Team"}></ShowPageName>
      </div>
      <div>
        <div className="text-center my-10 ">
          <h1 className="text-[40px]">
            <span className="text-[#ff4900]">Team </span>Members
          </h1>
          <p className="">
            Each member of our team is dedicated to delivering exceptional
            service, ensuring <br /> that your experience with us is nothing
            short of excellent.{" "}
          </p>
        </div>
        <div>
          <Container>
            <div>
              <h1 className="text-xl py-2 max-w-max department-name relative">
                Software Department
              </h1>
              <div className="my-10 grid grid-cols-3">
                <Link to={`/personalInfo/${id}`}>
                <div className="member-card-wraper">
                  <div className="member-card">
                    <div className="w-full h-[350px] overflow-hidden">
                      <img
                        src={member1}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-1 py-4">
                      <h1 className="text-2xl font-bold">Sneha Islam</h1>
                      <p className="text-base">Software Developer</p>
                    </div>
                  </div>
                  <div className="member-details">
                    <div className="inline-flex gap-6">
                      <a href="">
                        <FaFacebook size={36} className="text-blue-500" />
                      </a>
                      <a href="">
                        <FaLinkedin size={36} className="text-[#0b65c3]" />
                      </a>
                      <a href="">
                        <FaSquareInstagram
                          size={36}
                          className="text-[#df54f8]"
                        />
                      </a>
                    </div>
                  </div>
                </div></Link>
                <div className="member-card-wraper">
                  <div className="member-card">
                    <div className="w-full h-[350px] overflow-hidden">
                      <img
                        src={member3}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-1 py-4">
                      <h1 className="text-2xl font-bold">Fazle Abedin</h1>
                      <p className="text-base">Software Developer</p>
                    </div>
                  </div>
                  <div className="member-details">
                    <div className="inline-flex gap-6">
                      <a href="">
                        <FaFacebook size={36} className="text-blue-500" />
                      </a>
                      <a href="">
                        <FaLinkedin size={36} className="text-[#0b65c3]" />
                      </a>
                      <a href="">
                        <FaSquareInstagram
                          size={36}
                          className="text-[#df54f8]"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-card-wraper">
                  <div className="member-card">
                    <div className="w-full h-[350px] overflow-hidden">
                      <img
                        src={member2}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center space-y-1 py-4">
                      <h1 className="text-2xl font-bold">Senorita Gupta</h1>
                      <p className="text-base">Software Developer</p>
                    </div>
                  </div>
                  <div className="member-details">
                    <div className="inline-flex gap-6">
                      <a href="">
                        <FaFacebook size={36} className="text-blue-500" />
                      </a>
                      <a href="">
                        <FaLinkedin size={36} className="text-[#0b65c3]" />
                      </a>
                      <a href="">
                        <FaSquareInstagram
                          size={36}
                          className="text-[#df54f8]"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
