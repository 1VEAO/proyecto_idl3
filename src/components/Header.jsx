import { Link } from "react-router";
import { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";

const navLinks = [
  { to: "/test", label: "test" },
  { to: "/lenguajes", label: "lenguajes" },
  { to: "/blog", label: "blog" },
  { to: "/contacto", label: "contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Versión Web */}
      <div className="header_web bg-sky-600 h-20 justify-between items-center px-6 hidden md:flex">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </Link>
        <nav className="flex gap-8 text-white font-bold">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="capitalize text-lg font-normal hover:scale-110 transition-all"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Versión Mobile */}
      <div className="header_mobile bg-sky-600 flex justify-between items-center px-4 py-3 md:hidden">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>
        <button
          className="text-white text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <CgMenuRight />
        </button>

        {/* Menú desplegable */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-sky-700 z-50 flex flex-col p-6 gap-6 text-white text-lg font-semibold">
            <div className="flex justify-between items-center mb-4">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl"
              >
                <CgClose />
              </button>
            </div>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setIsOpen(false)}>
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
