import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import Catagories from "../../components/Catagories";
import Geeks from "../../components/Geeks";
const HomePag = () => {
  return (
    <>
      <MainLayout></MainLayout>

      <button
        className="z-50 lg:bottom-5 lg:left-1/2 lg:fixed lg:w-[50px] bg-black
        hidden
      "
      >
        Button
      </button>

      <Hero />

      <Catagories />
      <div
        className="mx-10 my-20 flex lg:flex-row flex-col gap-20 
      lg:align-middle lg:items-start lg:justify-center"
      >
        <Articles />

        <Geeks />
      </div>
    </>
  );
};

export default HomePag;
