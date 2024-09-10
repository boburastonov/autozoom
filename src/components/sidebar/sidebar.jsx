import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ setOpen }) => {
  return (
    <nav className="sidebar lg:hidden bg-[#0b0b0b] fixed right-0 top-0 gap-y-10 z-50 md:w-[40%] sm:w-[60%] w-full h-full transition-all duration-[0.3s]">
      <button
        className="text-[40px] fixed top-3 right-3"
        onClick={() => setOpen(false)}
      >
        <IoClose />
      </button>
      <ul className="flex flex-col md:ml-10 sm:mt-10 mt-16">
        <li className="py-[10px] ml-10">
          <Link className="text-[18px] uppercase" to={"/cars"}>
            Cars
          </Link>
        </li>
        <li className="py-[10px] ml-10">
          <Link className="text-[18px] uppercase" to={"/"}>
            Brand
          </Link>
        </li>
        <li className="py-[10px] ml-10">
          <Link className="text-[18px] uppercase" to={"/services"}>
            Services
          </Link>
        </li>
        <li className="py-[10px] ml-10">
          <Link className="text-[18px] uppercase" to={"/about"}>
            About us
          </Link>
        </li>
        <li className="py-[10px] ml-10">
          <Link className="text-[18px] uppercase" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li className="py-[10px] ml-10">
          <Link className="text-[18px] uppercase" to={"/blog"}>
            Blog
          </Link>
        </li>
        <li className="py-[10px] ml-10">
          <Link className="text-[18px] uppercase" to={"tel:+971527030189"}>
            +971 52 7030189
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
