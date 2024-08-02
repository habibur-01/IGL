import pic from "../../assets/images/3.png";
import Container from "../Shared/Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  delay: 400,
});

const WhyChooseSection = () => {
  return (
    <div className="my-28">
      <Container>
        <div className="flex justify-between h-[600px] bg-[#ffffff] ">
          <div
            className="w-[40%] h-full overflow-hidden text-right"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img src={pic} alt="" className="h-full " />
          </div>
          <div className="text-left  flex-1">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Reasons to Trust Us</h1>

              <p className="text-base font-medium pr-10">
                Trust is earned through consistent performance and reliability.
                We have built our reputation on a foundation of trust,
                integrity, and transparency. You can count on us to deliver on
                our promises
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="w-96 space-y-3">
                <h1 className="text-2xl font-bold">Company Values</h1>
                <p className="text-base leading-8">
                  Honest and transparent business practices. Dedicated to
                  achieving your goals. Eco-friendly practices and sustainable
                  solutions. Actively involved in supporting our community.
                </p>
              </div>
              <div className="w-96 space-y-3">
                <h1 className="text-2xl font-bold">Experience and Expertise</h1>
                <p className="text-base leading-8">
                  Decades of experience in the field. A team of experts with
                  diverse skills and knowledge. Numerous successful projects and
                  case studies. Recognized and awarded for our excellence.
                </p>
              </div>
              <div className="w-96 space-y-3">
                <h1 className="text-2xl font-bold">Quality Assurance</h1>
                <p className="text-base leading-8">
                  Certified Professionals with highly trained and certified
                  experts. A history of successful projects and satisfied
                  clients. Positive feedback from our satisfied customers.
                </p>
              </div>
              <div className="w-96 space-y-3">
                <h1 className="text-2xl font-bold">Customer Support</h1>
                <p className="text-base leading-8">
                  {`Dedicated support to assist you whenever you need help.
                Expert advice to help you make informed
                decisions. Tailored services to meet your
                unique requirements.`}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <button className="btn bg-[#ff4900] w-32 text-white text-base rounded-full hover:bg-transparent hover:text-black hover:border-[1px] hover:border-[#ff4900]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseSection;
