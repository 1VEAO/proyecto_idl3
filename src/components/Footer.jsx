import { Link } from "react-router";
import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const navLinks = [
  { to: "/test", label: "test" },
  { to: "/lenguajes", label: "lenguajes" },
  { to: "/blog", label: "blog" },
  { to: "/contacto", label: "contacto" },
];

const socialLinks = [
  { to: "/facebook", icon: <FaSquareFacebook />, className: "text-blue-600" },
  { to: "/linkedin", icon: <FaLinkedin />, className: "text-sky-300" },
  { to: "/twitter", icon: <FaSquareXTwitter />, className: "text-gray-600" },
];

const Footer = () => {
  return (
    <footer>
      {/* Versión Web */}
      <div className="footer_web bg-gray-800 text-white h-40 hidden md:flex justify-between items-center px-10">
        <nav className="flex gap-5 capitalize">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <nav className="flex gap-5 text-3xl">
          {socialLinks.map(({ to, icon, className }) => (
            <Link key={to} to={to} className={className}>{icon}</Link>
          ))}
        </nav>
      </div>

      {/* Versión Mobile */}
      <div className="footer_mobile bg-gray-800 text-white md:hidden p-6 flex flex-col items-center gap-5 text-center">
        <nav className="flex flex-col gap-2 capitalize">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <div className="flex gap-5 text-2xl">
          {socialLinks.map(({ to, icon, className }) => (
            <Link key={to} to={to} className={className}>{icon}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
