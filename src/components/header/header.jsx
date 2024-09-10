import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/search-icon.png";
import Logo from "../../assets/logo.svg";
import { MdMenuOpen } from "react-icons/md";
import Sidebar from "../sidebar/sidebar";
import axios from "axios";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [brandData, setBrandData] = useState([]);

  //! Window bosilganda yoki scroll bo'lganda sidebar'ni yopish uchun funksiya
  const handleOutsideClickOrScroll = (e) => {
    if (
      open &&
      !e.target.closest(".sidebar") &&
      !e.target.closest(".burger-btn")
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("click", handleOutsideClickOrScroll);
      window.addEventListener("scroll", handleOutsideClickOrScroll);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClickOrScroll);
      window.removeEventListener("scroll", handleOutsideClickOrScroll);
    };
  }, [open]);

  const getBrand = () => {
    axios
      .get("https://api.autozoomrental.com/api/brands")
      .then((data) => setBrandData(data.data.data))
      .catch((error) => error.message);
  };

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <header className="relative bg-[#111219] shadow-[0_0_1rem_#0009] lg:py-6 md:py-4 sm:py-2 py-1">
      <div className="container flex justify-between items-center">
        <div className="flex items-center md:gap-x-2 gap-x-1">
          <div className="flex items-center mr-2">
            <Link
              className="inline-block language-icon ru-icon w-[25px] h-[25px]"
              to={"/"}
            />
            <Link
              className="inline-block language-icon eng-icon w-[25px] h-[25px]"
              to={"/"}
            />
          </div>
          <form className="flex items-center relative">
            <button
              className="md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] sm:left-4 w-[10px] h-[10px] left-2 bg-transparent border-0 absolute"
              type="submit"
            >
              <img className="w-full h-full " src={SearchIcon} alt="Search" />
            </button>
            <input
              className="search-input md:h-12 md:pl-12 md:w-[380px] sm:h-10 sm:pl-10 sm:w-[200px] sm:pr-[15px] h-8 pl-6 w-[150px] border-0 rounded-[10px]"
              placeholder="Search..."
              type="text"
              name="search"
              id="search"
            />
          </form>
        </div>
        <Link className="inline-block md:w-[110px] sm:w-24 w-16" to={"/"}>
          <img className="w-full" src={Logo} alt="Autozoom" />
        </Link>
        <nav className="lg:block hidden transition-all duration-[3s]">
          <ul className="flex flex-wrap justify-end leading-[25px]">
            <li className="py-[10px] ml-10">
              <Link className="text-[15px] uppercase" to={"/cars"}>
                Cars
              </Link>
            </li>
            <li className="py-[10px] ml-10 relative brand">
              <Link className="text-[15px] uppercase relative" to={"/"}>
                Brand
              </Link>
              <ul
                className="dropdown hidden absolute top-10 -left-[200px] w-[700px] h-[89vh] overflow-y-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-7 bg-red-800 p-5 rounded-md [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
              >
                {(brandData &&
                  brandData?.map((brand) => (
                    <li key={brand?.id}>
                      <Link
                        className="flex items-center text-[15px] gap-x-3"
                        to={`/cars/${brand?.id}`}
                      >
                        <img
                          className="w-14"
                          src={`https://api.autozoomrental.com/api/uploads/images/${brand?.image_src}`}
                          alt={brand?.title}
                        />
                        <p className="text-[#ccc] capitalize">
                          Rent{" "}
                          <span className="text-white">{brand?.title}</span>{" "}
                          Dubai
                        </p>
                      </Link>
                    </li>
                  ))) || <p>Loading...</p>}
              </ul>
            </li>
            <li className="py-[10px] ml-10">
              <Link className="text-[15px] uppercase" to={"/services"}>
                Services
              </Link>
            </li>
            <li className="py-[10px] ml-10">
              <Link className="text-[15px] uppercase" to={"/about"}>
                About us
              </Link>
            </li>
            <li className="py-[10px] ml-10">
              <Link className="text-[15px] uppercase" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className="py-[10px] ml-10">
              <Link className="text-[15px] uppercase" to={"/blog"}>
                Blog
              </Link>
            </li>
            <li className="py-[10px] ml-10">
              <Link className="text-[15px] uppercase" to={"tel:+971527030189"}>
                +971 52 7030189
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="burger-btn lg:hidden text-[40px]"
          onClick={() => setOpen(true)}
        >
          <MdMenuOpen />
        </button>
        {open && <Sidebar setOpen={setOpen} />}
      </div>
    </header>
  );
};

export default Header;
