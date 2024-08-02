import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  // Function to split subHeading into lines of 10 words each
  const formatSubHeading = (text) => {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += 10) {
      lines.push(words.slice(i, i + 10).join(" "));
    }
    return lines.join("<br />");
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">{heading}</h1>
      <p
        className="text-base font-medium"
        dangerouslySetInnerHTML={{ __html: formatSubHeading(subHeading) }}
      ></p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
