import React, { useState } from "react";
import { images } from "../constants";
import "./Header.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const nameInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  { name: "Pricing", type: "link" },
];
const NavItem = ({ item }) => {
  return (
    <li className=" relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py2 text-dark-hard">
            {item.name}
          </a>
          <span
            className="text-dark-hard transition-all suration-500 font-bold absolute right-0 top-0 group-hover:right-[90%] opacity-0 
    group-hover:opacity-100"
          >
            /
          </span>
        </>
      ) : (
        <>
        <a href="/" className="px-4 py2 flex flex-row gap-x-1 items-center text-dark-hard">
            {item.name}
            <IoIosArrowDown className=""/>
          </a>
          <div className=" hidden transition-all duration-500 pt-4 absolute
          right-0 bottom-0 transform translate-y-full group-hover:block w-max
          ">
          <ul className="lg:absolute lg:top-0 lg:left-[-150px] absolute top-[-20px] left-[-44px] lg:w-48 w-40  lg:px-8 lg:py-8 flex flex-col align-middle justify-center items-center gap-5 lg:shadow-lg lg:rounded-lg overflow-hidden">
          {
                item.items.map((page) => (
                    <li>
                    <a href="/" className="hover:bg-dark-hard hover:text-white 
                    px-4 py-1 transition-all duration-500 rounded-lg text-white lg:text-dark-hard
                    ">
                        {page}
                    </a>    
                    </li>
                ))
            }
          </ul>

          </div>
        </>
      )}
    </li>
  );
};
const Header = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  const visibleNavHandler = () => {
    setVisibleNav((curState) => {
      return !curState;
    });
  };
  return (
    <>
      <section className="lg:m-5 ">
        <header className="container mx-auto mt-0 px-5 flex justify-between items-center align-middle py-4">
          <div>
            <img src={images.logo} alt="Logo" className="w-12 lg:w-16 " />
          </div>
          <div className="z-[50] lg:hidden">
            {visibleNav ? (
              <AiOutlineClose
                className=" w-5 h-5"
                onClick={visibleNavHandler}
              />
            ) : (
              <AiOutlineMenu onClick={visibleNavHandler} />
            )}
          </div>
          <div
            className={`${
              visibleNav ? "right-0" : "-right-full"
            }  transition-all duration-500 mt-[100px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] fixed top-0 bottom-0 lg:static  flex flex-col justify-center
           w-full lg:w-auto lg:justify-end
           lg:flex-row align-middle justify-center gap-x-5 items-center `}
          >
            <ul className=" mt-[-400px] lg:mt-0 flex items-center flex-col gap-y-5  lg:flex-row gap-x-2 font-semibold text-white lg:text-dark-soft">
              {nameInfo.map((item) => {
                return (
                  <NavItem key={item.name} item={item} value={item.name} />
                );
              })}
            </ul>
            <button
              className="mt-5 lg:mt-0 border-dark-soft border-2 bg-transparent transition-all bg-blue-500 px-6 py-2 
          text-dark-hard font-semibold rounded-full flex justify-center align-middle hover:bg-white hover:border-2 lg:border-dark-hard
          hover:text-white hover:bg-gray-900 items-center"
            >
              Sign in
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
