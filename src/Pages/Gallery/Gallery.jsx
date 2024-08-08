import PageBanner from "../../Components/Shared/PageBanner/PageBanner";
import image from "../../assets/images/gallery.jpg";
import img1 from "../../assets/images/3.png";
import img2 from "../../assets/images/member-1.jpg";
import img3 from "../../assets/images/member-2.jpg";
import img4 from "../../assets/images/member-3.jpg";
import img5 from "../../assets/images/concern.jpg";
import img6 from "../../assets/images/banner.jpg";
import "./gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";

const Gallery = () => {
  let year = [
    {
      id: 1,
      year: 2021,
    },
    {
      id: 2,
      year: 2022,
    },
    {
      id: 3,
      year: 2023,
    },
  ];
  let data = [
    {
      id: 1,
      imgSrc: img2,
    },
    {
      id: 2,
      imgSrc: img1,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];
 
  return (
    <div>
      <PageBanner
        image={image}
        path={"Gallery"}
        title={"Photo Gallery"}
      ></PageBanner>
      <div>
        <div className="text-center mt-20 mb-10 ">
          <h1 className="text-[40px]">
            Photo
            <span className="text-[#ff4900]"> Gallery </span>
          </h1>
          <p className="">
            Each member of our team is dedicated to delivering exceptional
            service, ensuring <br /> that your experience with us is nothing
            short of excellent.{" "}
          </p>
        </div>
        <div className="relative my-20 grid grid-cols-3">
          {year.map((perYear) => (
            <Link key={perYear.id} to={`/gallery/${perYear.year}`}>
              <Swiper
                
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {data.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img
                      src={image.imgSrc}
                      className="h-full w-full object-cover rounded-md"
                      alt=""
                    />
                  </SwiperSlide>
                ))}
                <div className="absolute top-0 left-0 z-20 h-full w-full flex justify-center items-center bg-black/50 bg-blend-overlay rounded-2xl">
                  <h1 className="text-2xl font-bold text-white tracking-widest">
                    {perYear.year}
                  </h1>
                </div>
              </Swiper>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;
