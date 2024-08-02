import PageBanner from "../../Components/Shared/PageBanner/PageBanner";
import image from "../../assets/images/gallery.jpg";
import img1 from "../../assets/images/3.png";
import img2 from "../../assets/images/member-1.jpg";
import img3 from "../../assets/images/member-2.jpg";
import img4 from "../../assets/images/member-3.jpg";
import img5 from "../../assets/images/concern.jpg";
import img6 from "../../assets/images/banner.jpg";
import "./gallery.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
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
  console.log(data);
  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')

  const handleImage = (img) => {
       setTempImgSrc(img)
       setModel(true)
  }
  console.log(model)
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
        <div className={`${model ? "model open" : "model"}`}>
          <img src={tempImgSrc} alt="" />
          <RxCross2 size={40} className="text-white close-icon" onClick={()=> setModel(false)}/>

        </div>
        <div className="gallery mb-10">
          {data.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={()=>handleImage(item.imgSrc)}>
                <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
