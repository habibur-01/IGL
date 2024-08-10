const AddSisterContent = () => {
  return (
    <div>
      <div className="my-16">
        <form action="" className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
           
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Upload Logo</label>
            <input
              type="file"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type submenu"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Details</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type submenu path (ex. iglweb)"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Website URL</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type submenu path (ex. iglweb)"
            />
          </div>

          <div>
            <button className="btn w-24 bg-[#ff4900] text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSisterContent;
