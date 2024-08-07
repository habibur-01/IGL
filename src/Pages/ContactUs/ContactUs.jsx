import contactbg from "../../assets/images/contact.jpg";
import { FaHome } from "react-icons/fa";
import PageBanner from "../../Components/Shared/PageBanner/PageBanner";
import Container from "../../Components/Shared/Container/Container";

const ContactUs = () => {
  return (
    <div>
      <PageBanner
        image={contactbg}
        path={"Contact"}
        title={"Contact Us"}
      ></PageBanner>
      <Container>
        <div>
          <div className="bg-[#ffffff] h-[600px] flex justify-center items-center ">
            <div className="flex justify-center space-x-16 ">
              <div className="max-w-max">
                <div className="border-b-2 my-2">
                  <h1 className="inline-flex items-center gap-4 ">
                    <FaHome size={30} />
                    <span className="text-xl font-bold"> Our Office</span>
                  </h1>
                </div>
                <div className="my-4">
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead></thead>
                      <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200 border">
                          <td className="text-base font-bold w-48">
                            Office Name
                          </td>
                          <td>Dhaka Office</td>
                          <td>Chattogram Office</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td className="text-base font-bold w-48 ">Address</td>
                          <td>
                            House # 33A(4th Floor), Road # 4, Dhanmondi,
                            Dhaka-1205, Bangladesh
                          </td>
                          <td>
                            House # 33A(4th Floor), Road # 4, Dhanmondi,
                            Dhaka-1205, Bangladesh
                          </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td className="text-base font-bold w-48 ">
                            Mobile Number
                          </td>
                          <td>
                            <a href="tel: +880-1814-445932">
                              +880-1814-445932 (Office)
                            </a>
                          </td>
                          <td>
                            <a href="tel: +880-1814-445932">
                              +880-1814-445932 (Office)
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-base font-bold w-48 ">
                            Helpline
                          </td>
                          <td>+880-1958-666999</td>
                          <td>+880-1958-666999</td>
                        </tr>
                        <tr>
                          <td className="text-base font-bold w-48 ">Phone </td>
                          <td> +880-2-55166 666</td>
                          <td> +880-2-55166 666</td>
                        </tr>
                        <tr>
                          <td className="text-base font-bold w-48 ">Email</td>
                          <td>
                            sales@iglweb.com
                            <br />
                            support@iglweb.com
                            <br />
                            accounts@iglweb.com
                          </td>
                          <td>
                            sales@iglweb.com
                            <br />
                            support@iglweb.com
                            <br />
                            accounts@iglweb.com
                          </td>
                        </tr>
                        <tr>
                          <td className="text-base font-bold w-48 ">Skype</td>
                          <td>iglweb.com</td>
                          <td>iglweb.com</td>
                        </tr>
                        <tr>
                          <td className="text-base font-bold w-48 ">
                            WhatsApp
                          </td>
                          <td>iglweb.com</td>
                          <td>iglweb.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-[80%]">
                <p className="text-xs text-gray-500"> Contact</p>
                <h1 className="text-2xl font-semibold underline mb-5">
                  Connect with us
                </h1>

                <div>
                  <form action="" className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label>Name</label>
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Type name"
                          className="w-full border-2 border-gray-300 pl-4 h-8 rounded-md"
                        ></input>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label>Email</label>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Type email"
                          className="w-full border-2 border-gray-300 pl-4 rounded-md h-8"
                        ></input>
                      </div>
                    </div>
                    <div className="space-y-3 col-span-full">
                      <label>Message</label>
                      <div>
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Type message"
                          className="h-40 w-full border-2 border-gray-300 rounded-md px-4 pt-4"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button
                        className="px-6 py-3 text-white bg-[#ff4900]   rounded-md font-medium  hover:-translate-y-1 hover:bg-transparent hover:text-black hover:border-[1px] hover:border-[#ff4900]"
                        
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* <div className="w-[100%]">
              <p className="text-xs text-gray-500"> Contact</p>
              <h1 className="text-2xl font-semibold underline mb-5">
                Connect with us
              </h1>

              <div>
                <form action="" className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label>Name</label>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type name"
                        className="w-full border-2 border-gray-300 pl-4 h-8 rounded-md"
                      ></input>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label>Email</label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Type email"
                        className="w-full border-2 border-gray-300 pl-4 rounded-md h-8"
                      ></input>
                    </div>
                  </div>
                  <div className="space-y-3 col-span-full">
                    <label>Message</label>
                    <div>
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Type message"
                        className="h-40 w-full border-2 border-gray-300 rounded-md px-4 pt-4"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-6 py-3 text-white bg-[#ff4900]   rounded-md font-medium  hover:-translate-y-1 hover:bg-transparent hover:text-black hover:border-[1px] hover:border-[#ff4900]"
                      data-aos="fade-down"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.0961650069137!2d90.37752630392622!3d23.740519968176205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b5c0611207%3A0xed7ed8cceed1d7ad!2sIGL%20Web%20Ltd!5e0!3m2!1sen!2sbd!4v1722918615664!5m2!1sen!2sbd"
                width="100%"
                height="450"
                allowfullscreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
