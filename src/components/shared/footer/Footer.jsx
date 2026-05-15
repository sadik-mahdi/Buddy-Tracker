import React from "react";
import { NavLink } from "react-router";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3d33] text-white py-16 mt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Buddy Tracker
        </h2>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
            Social Links
          </h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e3d33] hover:bg-gray-200 transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e3d33] hover:bg-gray-200 transition-all">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1e3d33] hover:bg-gray-200 transition-all">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-6">
          <p>© {currentYear} KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8">
            <NavLink to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </NavLink>
            <NavLink to="/cookies" className="hover:text-white transition-colors">
              Cookies
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;