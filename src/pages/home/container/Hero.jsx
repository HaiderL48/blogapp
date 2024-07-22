import React from 'react'
import { images } from '../../../constants'
import "./Hero.css"
const popularTags = [
    {tag:"Design"},
    {tag:"Developer"},
    {tag:"User Experience"}
]
const PopularTag = ({item}) => {
    return(
        <>
            <li className=' cursor-pointer px-2 py-2 bg-blue-100 rounded-lg font-semibold text-dark-hard'>
                {item.tag}
            </li>
        </>
    )
}
const Hero = () => {
  return (
    <section className='xl:flex xl:flex-row xl:align-middle xl:justify-center xl:gap-x-36 lg:m-5 mt-0 lg:flex lg:flex-row lg:align-middle lg:justify-between lg:items-center'>
    <div className='xl:flex xl:justify-start xl:items-start flex flex-col align-middle items-center justify-center gap-5 '>
    <h1 className='text-3xl text-center font-bold lg:text-5xl text-dark-hard'>Inspiring Ideas, Endless Stories</h1>
    <p className='text-blue-700 font-bold lg:text-2xl text-xl text-center'>Your Journey to Knowledge Starts Here</p>
        <div className='xl:flex xl:justify-start xl:items-start xl:px-0 flex flex-col items-center gap-5 lg:flex lg:flex-row lg:px-56   rounded-lg lg:py-3 lg:items-center  lg:justify-left  lg:gap-4'>
            <input placeholder="Search" className='py-5 text-center w-80  shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-dark-hard h-8 lg:py-5  outline-none lg:px-8  rounded-lg' type="text" />
        <button className='search  text-center flex items-center py-5 h-8 px-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-dark-soft   text-white font-semibold lg:py-5 lg:px-6 rounded-lg'>
            Search
        </button>
        </div>
        <div className='flex flex-col items-start lg:flex lg:flex-row  lg:items-center lg:gap-5 font-bold text-md gap-5'>
            <span>Popular Tags: </span>
            <ul className='flex-wrap flex flex-row lg:flex lg:flex-row lg:gap-3 gap-2'>
            {popularTags.map((item) => {
                return (
                  <PopularTag key={item.tag} item={item} value={item.tag} />
                );
              })}
            </ul>
        </div>
    </div>
    <div className=' lg:w-[600px]'>
    <img srcSet={images.hero} alt="Hero image here" />
    </div>
    </section>
  )
}

export default Hero