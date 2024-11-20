import React from "react";
import { images } from "../constants";
import  "./ArticleCard.css";

const ArticleCard = ({className}) => {
  return <>
  
 <div  className={`box md:max-w-[350px] border-gray-400 border-[1px] flex flex-col align-middle items-center transition-all duration-500 rounded-xl overflow-hidden 
  
  hover:shadow-none shadow-md bg-dark-back`}>

    <img src={images.artic1} alt="artic1" className="mt-5 rounded-xl  w-[300px] h-auto "  />
   
    <div className="p-5 bg-dark-back">
  <h2 className="bg-dark-back font-roboto font-bold text-xl text-dark-text md:text-2xl">Future of Artificial Itelligence</h2>
  <br />
  <p className="bg-dark-back text-dark-text font-roboto text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div> 
  </div>

  </>;
};

export default ArticleCard;
