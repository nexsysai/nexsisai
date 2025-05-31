import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router";
import Logo from "../assets/logo3.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-600 py-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 dark:text-primary-light">
          {/* Logo and Description */}
          <div className="space-y-4">
            {/* <h2 className="text-lg font-bold text-blue-600">LOGO</h2> */}
            <a href="/" className="md:text-xl">
              <img
                src={Logo}
                alt="logo"
                className="w-32 h-18 filter brightness-125"
                loading="lazy"
              />
            </a>
            <div className="ml-3">
              <p>
                "Empowering businesses through innovation, technology, and
                limitless creativity."
              </p>
              {/* <p className="text-sm text-gray-500">@Lorem</p> */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <FaFacebookF className="text-blue-600" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <FaInstagram className="text-pink-600" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <FaTwitter className="text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <FaLinkedinIn className="text-blue-700" />
                </a>
              </div>
            </div>
          </div>

          {/* About Us Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info and Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact us</h3>
            <p>
              Have a project in mind? Let's bring your ideas to life and grow
              your business together.
            </p>
            <p>📞 +91 79872 12434</p>
            <p>📧 nexsysai.info@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-600 pt-5 text-center text-sm text-gray-500">
          © 2025 Nexsys AI. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
