import { BiMessageDetail } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import customer from "../../assets/images/member-3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-center gap-20">
        <h1 className="text-4xl text-right tracking-wide font-bold py-4">
          Our Customer <br />
          Review
        </h1>
        <p className="h-28 w-[1px] bg-[#ffd2bf]"></p>
        <div className="py-4">
          <BiMessageDetail size={75} style={{ color: "#ff4900" }} />

          <div className="-mt-14 ml-10">
            <BiMessageDetail size={75} style={{ color: "#ff4900" }} />
          </div>
        </div>
      </div>
      <div className="my-10 z-0 w-[80%] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" w-[80%] mx-auto min-h-fit py-6 mb-10">
              <div className="bg-[#f4f0e5] h-64 px-5 py-10 flex justify-between gap-6 rounded-lg">
                <img
                  src={customer}
                  className="border-2 rounded-full border-[#ffffff]"
                  alt=""
                />
                <div>
                  <p className=" text-lg leading-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut facilis explicabo dolores vero praesentium! Ea
                    perferendis iure adipisci laborum velit! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Ducimus, blanditiis!
                  </p>
                  <h3 className="text-xl font-bold mt-8">Tom Hardy</h3>
                  <h4 className="text-[#ff4900] mb-8">CEO</h4>
                </div>
              </div>
            </div>
            {/* <div className="flex w-[80%]  justify-center py-10 mx-auto shadow-xl relative">
              <div className="">
                <p className=" text-2xl  mx-auto leading-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  facilis explicabo dolores vero praesentium! Ea perferendis
                  iure adipisci laborum velit!
                </p>
                <h3 className="text-xl font-bold mt-8">Tom Hardy</h3>
                <h4 className="text-[#ff4900] mb-8">CEO</h4>
              </div>
              <div className="w-20 h-20 overflow-hidden rounded-full border-[1px] border-[#f0865d] ">
                <img
                  src={customer}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-[80%] mx-auto min-h-fit py-6 mb-10">
              <div className="bg-[#f4f0e5] h-64 px-5 py-10 flex justify-between gap-6 rounded-lg">
                <img
                  src={customer}
                  className="border-2 rounded-full border-[#ffffff]"
                  alt=""
                />
                <div>
                  <p className=" text-lg leading-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut facilis explicabo dolores vero praesentium! Ea
                    perferendis iure adipisci laborum velit! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Ducimus, blanditiis!
                  </p>
                  <h3 className="text-xl font-bold mt-8">Tom Hardy</h3>
                  <h4 className="text-[#ff4900] mb-8">CEO</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-[80%] mx-auto min-h-fit py-6 mb-10">
              <div className="bg-[#f4f0e5] h-64 px-5 py-10 flex justify-between gap-6 rounded-lg">
                <img
                  src={customer}
                  className="border-2 rounded-full border-[#ffffff]"
                  alt=""
                />
                <div>
                  <p className=" text-lg leading-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut facilis explicabo dolores vero praesentium! Ea
                    perferendis iure adipisci laborum velit! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Ducimus, blanditiis!
                  </p>
                  <h3 className="text-xl font-bold mt-8">Tom Hardy</h3>
                  <h4 className="text-[#ff4900] mb-8">CEO</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
