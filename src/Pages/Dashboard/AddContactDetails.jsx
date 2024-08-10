

const AddService = () => {
 

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.service.value;
    console.log({ serviceName });
  };
  return (
    <div>
      <div className="border-b-2 py-2">
        <h1 className="text-xl font-semibold px-2">Add Service Details</h1>
      </div>
      <div className="my-16">
        <form
          action=""
          className="grid grid-cols-2 gap-4"
          onSubmit={handleAddService}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Service Category *</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type service category"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Disk Space</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type service category"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Bandwidth</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type service category"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Webmail</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type service category"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Service/Control Panel</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type service category"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Site Backup & Restore</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type service category"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type service category"
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

export default AddService;
