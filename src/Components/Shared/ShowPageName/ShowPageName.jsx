import {PropTypes} from "prop-types";

const ShowPageName = ({pageName}) => {
  return (
    <div className="flex justify-center items-center gap-4 h-10 w-36 bg-[#ffffff] rounded-lg shadow-lg">
      <p className="h-2 w-2 rounded-full bg-[#ff4900]"></p>
      <p className="text-base font-semibold tracking-wider uppercase">
        {pageName}
      </p>
      <p className="h-2 w-2 rounded-full bg-[#ff4900]"></p>
    </div>
  );
};
ShowPageName.propTypes = {
    pageName: PropTypes.string
}

export default ShowPageName;
