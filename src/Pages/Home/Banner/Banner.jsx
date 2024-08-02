import { FaArrowRight } from "react-icons/fa";
import "./banner.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "aos/dist/aos.css";
import Aos from "aos";

Aos.init({
  delay: 400,
});

const Banner = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleAppointment = () => {
    setIsTrue(!isTrue);
  };
  console.log(isTrue);

  return (
    <div className="banner-container flex justify-center items-center">
      <div className="w-[80%] ">
        <h1
          className="text-[60px] font-extrabold"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="200"
        >
          Welcome To <span className="text-[#ff4900]">IGL Group</span>
        </h1>
        <p
          className="mt-8 leading-8 font-medium"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="200"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          temporibus at <br /> et accusamus, a magnam cupiditate quod maxime nam
          repellendus itaque <br /> eligendi culpa numquam explicabo veritatis
          deserunt !
        </p>
        <button
          onClick={handleAppointment}
          className="bg-[#ff4900] rounded-full btn text-white px-8 text-[16px] mt-10 hover:bg-transparent hover:text-[#ff4900] hover:border-[1px] hover:border-[#ff4900]"
          
        >
          Appointment{" "}
          <span className="-rotate-45">
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className={`form-container ${isTrue && "show-form-container"}`}>
        <form action="" className="p-8 space-y-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="write your name" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Write your email" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Date</label>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Time</label>
            <input aria-label="Time" type="time" />
          </div>
          <div>
            <button className="w-full bg-[#ff4900] h-10 text-white rounded-[4px] ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
