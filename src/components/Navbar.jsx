import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router";
import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "../assets/logo3.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    // { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md dark:bg-primary-dark">
      <div className="container flex items-center justify-between md:justify-between lg:justify-between px-6 py-4 md:py-7">
        <a href="/" className="md:text-xl">
          <img
            src={Logo}
            alt="logo"
            className="w-32 h-18 filter brightness-125"
            loading="lazy"
          />
        </a>

        {/* <div className="text-bold lg:hidden">
          <GiHamburgerMenu color="#1090CB" onClick={() => setIsOpen(true)} />
        </div> */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div className="lg:hidden">
            <GiHamburgerMenu
              color="#1090CB"
              onClick={() => setIsOpen(true)}
              size={24}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 min-h-screen bg-blue-800 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center z-50 text-white`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-2xl z-30"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-5 text-lg">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            {/* <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link> */}
            <button className="bg-white text-black px-4 py-3 rounded-lg">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us{" "}
              </Link>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-20 dark:text-white">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`relative hover:text-[#1090CB] cursor-pointer ${
                  location.pathname === item.path ? "text-[#1090CB] " : ""
                }`}
              >
                {/* Green Circle for Active Route */}
                {location.pathname === item.path && (
                  <span className="absolute -left-3 top-1/5 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></span>
                )}
                <NavLink className="" to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
            {/* <button className="bg-[#1090CB] text-white px-4 py-2 rounded-lg hover:">
              <Link to="/contact">Contact Us</Link>
            </button> */}

            {/* Dark Mode Toggle Button */}
            <div className="hidden lg:flex">
              <ThemeToggleButton
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
