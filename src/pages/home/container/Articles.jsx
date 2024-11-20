import React from "react";
import ArticleCard from "../../../components/ArticleCard";

const Articles = () => {
  return (
    <section className="
    container m-0  flex align-middle items-center justify-center lg:gap-10 flex-wrap lg:max-w-[800px]
    gap-5
    ">
    
      <ArticleCard className="lg:max-w-[380px] "/>
      <ArticleCard className="lg:max-w-[380px] "/>
      <ArticleCard className="lg:max-w-[380px] "/>
      <ArticleCard className="lg:max-w-[380px] "/>
    
    </section>
  );
};

export default Articles;
