import BannerTitle from "../BannerTitle/BannerTitle";
import { PropTypes } from "prop-types";

const PageBanner = ({ image, path, title }) => {
  const contactBanner = {
    width: "100%",
    height: "450px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div
        style={contactBanner}
        className="bg-[#000000]/60 bg-blend-overlay flex items-center"
      >
        <div className="container mx-auto text-white">
          <BannerTitle title={path} heading={title}></BannerTitle>
        </div>
      </div>
    </div>
  );
};
PageBanner.propTypes = {
  image: PropTypes.any,
  path: PropTypes.string,
  title: PropTypes.string,
};

export default PageBanner;
