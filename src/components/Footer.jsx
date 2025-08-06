import { Link } from "react-router";
import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* Versión Web */}
      <div className="footer_web bg-gray-800 text-white h-40 hidden md:flex justify-between items-center px-10">
        <nav className="flex gap-5 capitalize">
          <Link to="/test">test</Link>
          <Link to="/lenguajes">lenguajes</Link>
          <Link to="/blog">blog</Link>
          <Link to="/contacto">contacto</Link>
        </nav>
        <nav className="flex gap-5 text-3xl">
          <Link to="/facebook" className="text-blue-600"><FaSquareFacebook /></Link>
          <Link to="/linkedin" className="text-sky-300"><FaLinkedin /></Link>
          <Link to="/twitter" className="text-gray-600"><FaSquareXTwitter /></Link>
        </nav>
      </div>

      {/* Versión Mobile */}
      <div className="footer_mobile bg-gray-800 text-white md:hidden p-6 flex flex-col items-center gap-5 text-center">
        <nav className="flex flex-col gap-2 capitalize">
          <Link to="/test">test</Link>
          <Link to="/lenguajes">lenguajes</Link>
          <Link to="/blog">blog</Link>
          <Link to="/contacto">contacto</Link>
        </nav>
        <div className="flex gap-5 text-2xl">
          <Link to="/facebook" className="text-blue-600"><FaSquareFacebook /></Link>
          <Link to="/linkedin" className="text-sky-300"><FaLinkedin /></Link>
          <Link to="/twitter" className="text-gray-600"><FaSquareXTwitter /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
