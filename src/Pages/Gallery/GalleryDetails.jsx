import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Container from "../../Components/Shared/Container/Container";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import "./gallery.css";
import folder from "../../assets/images/folder.png";
// import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";

const GalleryDetails = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const { year } = useParams();
  const [tabIndex, setTabIndex] = useState(0);
  const [data, setData] = useState([]);
  const [selectTab, setSelectTab] = useState("intensive");

  useEffect(() => {
    axios
      .get("/image.json")
      .then((result) =>
        setData(result.data.filter((item) => item?.year == year))
      );
  }, [year]);

  const handleTabSelect = (index) => {
    setTabIndex(index);
    const tabNames = ["Intensive", "Provide ID", "Office Tour"];
    setSelectTab(tabNames[index].toLocaleLowerCase());
  };
  console.log(selectTab);
  const intensive = data.filter(
    (item) => item?.event.toLocaleLowerCase() === selectTab
  );
  console.log(intensive);

  //   console.log(data);
  const handleImage = (img) => {
    setTempImgSrc(img);
    setModel(true);
  };

  return (
    <Container>
      <div className="border-t-2">
        <div className="my-4 ">
          <h1 className="text-[18px] p-4 border font-medium ">
            Photo Gallery -- <span className="tracking-widest">{year}</span>
          </h1>
        </div>
        <div>
          <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
            <TabList>
              <Tab>Intensive</Tab>
              <Tab>Provide ID</Tab>
              <Tab>Office Tour</Tab>
            </TabList>
            <TabPanel>
              <div>
                {intensive.length <= 0 ? (
                  <div className="w-full h-[400px] flex flex-col gap-5 justify-center items-center">
                    <div className="h-28 w-28 overflow-hidden">
                      <img
                        src={folder}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h1 className="text-base font-semibold">Data is not available</h1>
                  </div>
                ) : (
                  <div>
                    <div className="gallery my-10">
                      {intensive.map((item, index) => {
                        return (
                          <div
                            className="pics"
                            key={index}
                            onClick={() => handleImage(item.imgSrc)}
                          >
                            <img
                              src={item.imgSrc}
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <div className="py-2 font-medium bg-base-300 text-center">
                              <h1>{`Tour to Cox's Bazar`} </h1>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="">
                {intensive.length <= 0 ? (
                  <div className="w-full h-[400px] flex flex-col gap-5 justify-center items-center">
                    <div className="h-28 w-28 overflow-hidden">
                      <img
                        src={folder}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h1 className="text-base font-semibold">Data is not available</h1>
                  </div>
                ) : (
                  <div>
                    <div className="gallery my-10">
                      {intensive.map((item, index) => {
                        return (
                          <div
                            className="pics"
                            key={index}
                            onClick={() => handleImage(item.imgSrc)}
                          >
                            <img
                              src={item.imgSrc}
                              alt=""
                              style={{ width: "100%" }}
                            />

                            <h1 className="text-base font-medium text-center py-2 bg-base-300">
                              {item?.caption || `Tour to Cox's Bazar`}{" "}
                            </h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                {intensive.length <= 0 ? (
                  <div className="w-full h-[400px] flex flex-col gap-5 justify-center items-center ">
                    <div className="h-28 w-28 overflow-hidden">
                      <img
                        src={folder}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h1 className="text-base font-semibold">Data is not available</h1>
                  </div>
                ) : (
                  <div>
                    <div className="gallery my-10">
                      {intensive.map((item, index) => {
                        return (
                          <div
                            className="pics"
                            key={index}
                            onClick={() => handleImage(item.imgSrc)}
                          >
                            <img
                              src={item.imgSrc}
                              alt=""
                              style={{ width: "100%" }}
                            />
                            <div className="py-2 font-medium bg-base-300 text-center">
                              <h1>{`Tour to Cox's Bazar`} </h1>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className={`${model ? "model open" : "model"}`}>
          <img src={tempImgSrc} alt="" />
          <RxCross2
            size={40}
            className="text-white close-icon"
            onClick={() => setModel(false)}
          />
        </div>
      </div>
    </Container>
  );
};

export default GalleryDetails;
