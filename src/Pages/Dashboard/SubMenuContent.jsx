import { Field, Label, Select } from "@headlessui/react";
import { FaArrowDown } from "react-icons/fa";
import clsx from "clsx";
import { useState } from "react";

const SubMenuContent = () => {
  const [selected, setSelected] = useState("About Us");


  return (
    <div>
      <div className="border-b-2 py-2">
        <h1 className="text-xl font-semibold px-2">Add Submenu Content</h1>
      </div>
      <div className="my-16">
        <form action="" className="grid grid-cols-2 gap-4">
          <div>
            <Field>
              <Label className=" ">Submenu Category</Label>

              <div className="relative w-96">
                <Select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className={clsx(
                    "mt-3 block w-96 appearance-none rounded-lg border-2  py-1.5 px-3  text-black/60",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                    // Make the text of each option black on Windows
                    "*:text-black"
                  )}
                >
                  <option value="About Us">About Us</option>
                  <option value="Sister Concern">Sister Concern</option>
                  <option value="our Team">Our Team</option>
                </Select>
                <FaArrowDown
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
                  aria-hidden="true"
                />
              </div>
            </Field>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="">Add Name</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type submenu"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Add title/Designition</label>
            <input
              type="text"
              name="service"
              className="w-96 h-10 border-2 px-2 overflow-hidden"
              placeholder="Type submenu"
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
            <textarea
              className="w-96 h-10 border-2 px-2"
              placeholder="Write description"
            ></textarea>
          </div>

          <div>
            <button className="btn w-24 bg-[#ff4900] text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubMenuContent;
