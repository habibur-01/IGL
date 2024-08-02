import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#16171b] text-white p-16">
        <div>
          <div className="w-16 h-24">
            <img src={logo} alt="" className="h-20 w-20" />
          </div>
          <p>Domain Registration,Web Hosting, Web design & <br/>Developed by IGL Web Ltd</p>
          <div className="flex gap-2">
            <p className="w-10 h-10 rounded-full bg-[#24262c] flex justify-center items-center hover:cursor-pointer"><FaFacebookF size={15} className="hover:text-blue-500"/></p>
            <p className="w-10 h-10 rounded-full bg-[#24262c] flex justify-center items-center hover:cursor-pointer"><FaInstagram size={15} className="hover:text-[#f142f7]"/></p>
            <p className="w-10 h-10 rounded-full bg-[#24262c] flex justify-center items-center hover:cursor-pointer"><FaYoutube size={16} className="hover:text-red-500"/></p>
            <p className="w-10 h-10 rounded-full bg-[#24262c] flex justify-center items-center hover:cursor-pointer"><FaWhatsapp size={16} className="hover:text-green-400"/></p>
          </div>
        </div>

        <nav>
          <h6 className="footer-title tracking-wider">Company Owned</h6>
          <a className="link link-hover text-base">IGL Web</a>
          <a className="link link-hover text-base">IGL Host</a>
          <a className="link link-hover text-base">IGL Network</a>
        </nav>
        <nav>
          <h6 className="footer-title tracking-wider">Company Owned</h6>
          <a className="link link-hover text-base">Student Visa</a>
          <a className="link link-hover text-base">Felna Tech</a>
          <a className="link link-hover text-base">Felna DMA</a>
        </nav>
        <nav>
          <h6 className="footer-title tracking-wider">Legal</h6>
          <a className="link link-hover text-base">Terms of use</a>
          <a className="link link-hover text-base">Privacy policy</a>
          <a className="link link-hover text-base">Cookie policy</a>
        </nav>
      </footer>
      <div className="w-full h-16 text-[#FFFFFF] text-base flex justify-center items-center bg-[#24262c]">
        <h1>Copyright &copy; 2022 <span>IGL Group</span></h1>
      </div>
    </div>
  );
};

export default Footer;
