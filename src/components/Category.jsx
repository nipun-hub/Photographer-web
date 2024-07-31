import React from 'react'
import img1 from "../assets/category/1.jpg";
import img2 from "../assets/category/2.jpg";
import img3 from "../assets/category/3.jpg";
import img4 from "../assets/category/4.jpg";
import { FaHeart , FaCaravan } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { PiMoonStarsFill } from "react-icons/pi";

const Category = () => {
  return (
    <div className='max-w-7xl mx-auto text-center mt-[100px] p-5' id='Category'>
        <p className='text-[18px] md:text-[40px] font-bold text-[#263238]'>Top Photographer Categories</p>
        <p className='text-[12px] md:leading-9 md:text-[25px]  font-semibold text-[#AFADAD] mt-[10px] md:mt-[35px]'>Explore our diverse range of categories and embark on a reading <br className='md:flex hidden'/> journey that suits your mood, passion, or curiosity</p>


        <div className='grid grid-cols-4 md:grid-cols-12 gap-5 mt-[50px] md:mt-[100px]'>

            <div className='w-full p-10 py-14 flex justify-center items-center col-span-4 bg-[#212121] rounded-[10px]'>
                <div>
                <p className='text-[18px] md:text-[25px] font-bold text-white'>Memories Of A Life</p>
                <p className='text-[12px] md:text-[15px] md:leading-[20px] leading-[16px] font-bold text-[#81817D] mt-8'>A Collection Of Memories To Live A Wonder Full Life. Come And Join Us to Collect The Memories Of Your Life</p>
                <button className='bg-white text-[12px] md:text-[15px] font-semibold text-black p-3 mt-8 rounded-[10px]'>Contact Now</button>
                </div>
            </div>

            <div className='grid gap-5 col-span-4 md:col-span-8 md:grid-cols-2'>
                <div className='relative rounded-[10px] max-h-[170px] overflow-hidden'>
                    <img src={img1} className='object-cover w-full h-full' alt="" />
                    <div className='absolute bg-black bg-opacity-80 p-4 top-0 left-0 w-full h-full'>
                    <FaHeart className='text-white' size={20}/>
                        <div className='absolute grid gap-2 p-4 left-0 bottom-0'>
                            <p className='text-start text-[18px] font-semibold text-white'>Wedding</p>
                            <p className='text-start text-[12px] font-semibold text-[#81817D]'>Loving Memories</p>
                        </div>
                    </div>
                </div>

                <div className='relative rounded-[10px] max-h-[170px] overflow-hidden'>
                    <img src={img2} className='object-cover w-full h-full' alt="" />
                    <div className='absolute bg-black bg-opacity-80 p-4 top-0 left-0 w-full h-full'>
                    <FaCakeCandles className='text-white' size={20}/>
                        <div className='absolute grid gap-2 p-4 left-0 bottom-0'>
                        <p className='text-start text-[18px] font-semibold text-white'>Birthday</p>
                            <p className='text-start text-[12px] font-semibold text-[#81817D]'>Special  In Life</p>
                        </div>
                    </div>
                </div>

                <div className='relative rounded-[10px] max-h-[170px] overflow-hidden'>
                    <img src={img3} className='object-cover w-full h-full' alt="" />
                    <div className='absolute bg-black bg-opacity-80 p-4 top-0 left-0 w-full h-full'>
                    <PiMoonStarsFill className='text-white' size={20}/>
                        <div className='absolute grid gap-2 p-4 left-0 bottom-0'>
                            <p className='text-start text-[18px] font-semibold text-white'>Cultural</p>
                            <p className='text-start text-[12px] font-semibold text-[#81817D]'>Sri Lanka Cultural</p>
                        </div>
                    </div>
                </div>

                <div className='relative rounded-[10px] max-h-[170px] overflow-hidden'>
                    <img src={img4} className='object-cover w-full h-full' alt="" />
                    <div className='absolute bg-black bg-opacity-80 p-4 top-0 left-0 w-full h-full'>
                    <FaCaravan className='text-white' size={20}/>
                        <div className='absolute grid gap-2 p-4 left-0 bottom-0'>
                            <p className='text-start text-[18px] font-semibold text-white'>Travel</p>
                            <p className='text-start text-[12px] font-semibold text-[#81817D]'>Happiness In life</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category