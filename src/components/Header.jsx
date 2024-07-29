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

  const [dropDown, setDropDown] = useState(false)

  const dropDownHandler = () => {
    setDropDown((curState)=>{
      return !curState
    })
  }
   return (
    <li className=" relative group bg-transparent">
      {item.type === "link" ? (
        <>
          <a href="/" className="text-dark-hard px-4 py2 lg:text-dark-hard bg-transparent">
            {item.name}
          </a>
          <span
            className="cursor-pointer bg-transparent lg:text-dark-hard text-dark-hard transition-all suration-500 font-bold absolute right-0 top-0 group-hover:right-[90%] opacity-0 
    group-hover:opacity-100"
          >
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center lg:bg-dark-back bg-dark-back text-black">
        <button onClick={dropDownHandler} className="bg-transparent text-black px-4 py2 flex flex-row gap-x-1 items-center lg:text-dark-hard">
            {item.name}
            <IoIosArrowDown className="lg:bg-trasparent bg-dark-back "/>
          </button>
          <div className={`${dropDown ? "block" : "hidden" } bg-dark-back lg:bg-dark-back lg:hidden transition-all duration-500 pt-4 lg:absolute
          lg:right-0 lg:bottom-0 lg:transform lg:translate-y-full lg:group-hover:block lg:w-max`}
          >
          <ul className="lg:bg-dark-back bg-dark-back text-white  lg:bg-dark-back lg:absolute lg:top-0 lg:left-[-150px]   lg:w-48 w-40  lg:px-8 lg:py-8 flex flex-col align-middle justify-center items-center gap-5 lg:shadow-lg lg:rounded-lg overflow-hidden">
          {
                item.items.map((page) => (
                    <li key={page} className="lg:bg-transparent bg-dark-back">
                    <a href="/" className="hover:bg-dark-button hover:text-white lg:bg-transparent bg-dark-back
                    px-4 py-1 transition-all duration-500 rounded-lg text-black lg:text-dark-hard
                    ">
                        {page}
                    </a>    
                    </li>
                ))
            }
          </ul>

          </div>
        </div>
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
        <header className=" container mx-auto mt-0 px-5 flex justify-between items-center align-middle py-4">
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
            }  transition-all duration-500 mt-[80px] lg:mt-0 bg-dark-back lg:bg-dark-back z-[49] fixed top-0 bottom-0 lg:static  flex flex-col justify-center
            w-full lg:w-auto lg:justify-end
           lg:flex-row align-middle justify-center gap-x-5 items-center`}
          >
            <ul className=" mt-[-350px] lg:mt-0 bg-dark-back lg:bg-transparent
             flex items-center align-middle justify-center flex-col gap-y-5  lg:flex-row gap-x-2 font-semibold text-dark-text lg:text-dark-text">
              {nameInfo.map((item) => {
                return (
                  <NavItem key={item.name} item={item} value={item.name} />
                );
              })}
            </ul>
            <button
              className="mt-5 lg:mt-0  transition-all bg-dark-button px-6 py-2 
          text-black lg:text-dark-hard font-semibold rounded-full flex justify-center align-middle hover:bg-dark-back hover:border-2 border-dark-button lg:border-dark-button
          hover:text-gray-900 lg:hover:bg-dark-back hover:bg-dark-back items-center"
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
