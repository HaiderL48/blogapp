import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import Fade from 'react-reveal/Fade';
const HomePag = () => {
  return (
    <>
    <Fade>
    <MainLayout>
    </MainLayout>
      <Hero />
      <Articles />
      </Fade>
    </>
  );
};

export default HomePag;
