import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import axios from "axios";

const Footer = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const getCategories = () => {
    axios
      .get("https://api.autozoomrental.com/api/categories")
      .then((data) => setCategoriesData(data.data.data))
      .catch((error) => error.message);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <footer className="md:pt-[50px] md:pb-[103px] sm:pt-10 sm:pb-16 pt-5 pb-10 bg-[#111219] text-white">
      <div className="container sm:px-5 px-2">
        <ul className="flex justify-between flex-wrap list-none">
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 sm:items-start items-center mb-6">
            <a href="/">
              <img
                className="w-[110px] h-20 hover:opacity-85"
                src={logo}
                alt="logo"
              />
            </a>
            <div>
              <h1 className="merriweather-bold md:text-[32px] md:pt-[30px] sm:text-[29px] pt-7 text-[27px] -tracking-[0.02em]  uppercase max-w-[265px]">
                LUXURY CAR RENTAL IN DUBAI
              </h1>
              <p className="text-[#fff9] text-[14px] leading-[150%] mt-[40px] mb-[14px] max-w-[265px]">
                Rent sports and luxury cars directly without intermediaries.
                Rent a car in Dubai with Auto Zoom Car Rental - safety and
                driving pleasure
              </p>
            </div>
          </li>
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 mb-6">
            <a className="text-[18px] uppercase hover:opacity-85" href="/">
              CARS
            </a>
            <ul>
              {categoriesData &&
                categoriesData?.map((category) => (
                  <li className="mt-[23px]" key={category?.id}>
                    <a
                      className="text-[14px] text-[#fff9] capitalize hover:text-white transition-all duration-[0.3s]"
                      href={`/cars/${category?.id}`}
                    >
                      {category?.name_en}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 mb-6">
            <ul className="flex flex-col justify-between">
              <a
                className="text-[18px] uppercase hover:opacity-85"
                href="/blog"
              >
                BLOG
              </a>
              <li className="mt-12">
                <a
                  className="text-[18px] uppercase hover:opacity-85"
                  href="/service"
                >
                  SERVICES
                </a>
              </li>
              <li className="flex flex-col mt-12">
                <a
                  className="text-[18px] uppercase hover:opacity-85"
                  href="/contact"
                >
                  CONTACTS
                </a>
                <span className="text-[14px] text-[#fff9]">
                  Elite 3 Sports City, <br /> Dubai 26W8 24J, United <br /> Arab
                  Emirates
                  <br />
                  +971 52 7030189
                  <br />
                  Working hours: 24/7{" "}
                </span>
              </li>
            </ul>
          </li>
          <li className="px-3 flex flex-col md:mb-0 sm:mb-9 mb-6">
            <a
              className="text-[18px] uppercase hover:opacity-85"
              href="/about"
            >
              ABOUT US
            </a>
            <ul>
              <li className="mt-[23px]">
                <a
                  className="text-[14px] text-[#fff9] capitalize hover:text-white transition-all duration-[0.3s]"
                  href="/our_team"
                >
                  Our Team
                </a>
              </li>
              <li className="mt-[23px]">
                <a
                  className="text-[14px] text-[#fff9] uppercase hover:text-white transition-all duration-[0.3s]"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-[110px]">
                <a className="text[18px] hover:opacity-85" href="/">
                  Follow Us
                </a>
                <div className="flex items-center gap-[10px] pt-5">
                  <a
                    className="text-[#fff9]"
                    href="https://www.instagram.com/autozoomrental"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="text-[#fff9]"
                    href="https://www.facebook.com"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="text-[#fff9]"
                    href="https://www.youtube.com"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex md:justify-between md:mt-2 justify-center mt-4 flex-wrap ">
          <a
            className="md:mb-0 md:px-6 md:py-5 md:text-[16px] sm:mb-10 px-5 py-4 text-[14px] mb-7 uppercase inline-block border border-solid border-[#fff] rounded-[15px] outline-0 bg-transparent hover:bg-[#fe363b] hover:border-transparent transition-all duration-[0.3s]"
            href="tel:+971527030189"
          >
            GET BEST OFFER
          </a>
          <div className="md:ml-0 sm:ml-2 w-[70%] border-t border-solid border-[#fff3] flex justify-between pt-6">
            <p className="sm:mr-0 mr-4 text-[14px] text-[#fff9] capitalize hover:text-white transition-all duration-[0.3s]">
              © 2024 Auto Zoom Car Rental. <br /> United Arab Emirates.
            </p>
            <a
              className="text-[14px] text-[#fff9] capitalize md:mr-28 mr-0 hover:text-white transition-all duration-[0.3s]"
              href="terms_and_conditions"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
