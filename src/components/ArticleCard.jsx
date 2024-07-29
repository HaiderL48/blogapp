import React from "react";
import { images } from "../constants";
import  "./ArticleCard.css";

const ArticleCard = ({className}) => {
  return <>
  
 <div  className={`box align-middle items-center transition-all duration-500 rounded-xl overflow-hidden 
  
  shadow-[rgba(36,_172,_242,_0.2)_0px_9px_30px] hover:shadow-none `}>

    <img src={images.artic1} alt="artic1" className="rounded-xl  w-full object-cover object-center h-auto "  />
   
    <div className="p-5">
  <h2 className="font-roboto font-bold text-xl text-dark-text md:text-2xl">Future of Artificial Itelligence</h2>
  <br />
  <p className="text-dark-text font-roboto text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div> 
  </div>

  </>;
};

export default ArticleCard;
