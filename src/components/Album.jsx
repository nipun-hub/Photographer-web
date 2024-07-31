import React from 'react'
import img1 from "../assets/album/1.jpg";

const Album = () => {
  return (
    <div className='max-w-7xl mx-auto   mt-[100px] p-5 '>
        <div className='grid md:grid-cols-2 gap-5 md:gap-10 items-center'>
            <img src={img1} className='object-cover rounded-[10px] md:h-[450px] w-full' alt="" />

            <div >
                <p className='text-[#F80301] md:text-[18px] text-[12px] font-bold'>Album</p>
                <p className='text-[#263238] text-[18px] md:text-[30px] mt-5 font-bold md:leading-[40px] leading-[23px]'>Warner Music Group announced today it’s acquiring the selected assets of the</p>
                <p className='text-[#7B809A] text-[16px] mt-4 leading-[20px] md:text-[20px]  md:leading-[30px]'>Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major</p>
            </div>
        </div>
    </div>
  )
}

export default Album