import { FaAngleRight } from "react-icons/fa";
import {PropTypes} from "prop-types"
import { Link } from "react-router-dom";

const BannerTitle = ({ title, heading }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[40px] font-bold tracking-wider first-letter:uppercase">{heading}</h1>
      <div className="flex items-center gap-1">
        <li className="list-none text-base tracking-wide text-[#ff4900] font-bold"><Link to={"/"}>Home</Link></li>
        <li className="list-none text-base"><FaAngleRight /></li>
        <li className="list-none text-base first-letter:uppercase font-medium">{title}</li>
      </div>
    </div>
  );
};
BannerTitle.propTypes = {
    title: PropTypes.string,
    heading: PropTypes.string
}

export default BannerTitle;
