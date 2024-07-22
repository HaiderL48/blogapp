import React from "react";
import ArticleCard from "../../../components/ArticleCard";

const Articles = () => {
  return (
    <section className="
    container m-0  flex  align-middle items-center justify-center gap-5  flex-wrap ">
 
      <ArticleCard className="w-full "/>
      <ArticleCard className="w-full"/>
    
    </section>
  );
};

export default Articles;
