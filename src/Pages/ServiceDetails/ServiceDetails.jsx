import folder from "../../assets/images/folder.png";
const ServiceDetails = () => {
  const data = [];
  console.log(data.length);

  return (
    <div>
      {data.length <= 0 ? (
        <div
          className="w-full flex justify-center items-center"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div className="h-28 w-28 overflow-hidden">
            <img src={folder} alt="" className="h-full w-full object-cover" />
          </div>
          <h1 className="text-xl">Data is not available now</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ServiceDetails;
