const AddAboutDetails = () => {
  return (
    <div>
      <div className="border-b-2 py-2">
        <h1 className="text-xl font-semibold px-2">Add About Details</h1>
      </div>
      <div className="my-16">
        <form action="" className="grid grid-cols-2 gap-4">
        
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Add Name</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Add title/Designition</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type designition"
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Upload Image</label>
            <input
              type="file"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type caption"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Details</label>
           <textarea className="w-96 h-10 border-2 px-2" placeholder="Write description"></textarea>
          </div>

          <div>
            <button className="btn w-24 bg-[#ff4900] text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAboutDetails;
