import React from 'react'
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";


const Gallery = () => {
    const imgages = [img1,img2,img3,img4,img5]
    const imgages2 = [img6,img7,img8,img9,img10,img11]
    const imgages3 = [img12,img13,img14,img15,img16]

  return (
    <div className='max-w-7xl mx-auto text-center mt-[100px] p-5' id='gallary'>
        <p className='text-[18px] md:text-[40px] font-bold text-[#263238]'>We Are Gallery</p>
        <p className='text-[12px] md:leading-9 md:text-[25px]  font-semibold text-[#AFADAD] mt-[10px] md:mt-[35px]'>Explore our diverse range of categories and embark on a reading <br className='md:flex hidden'/> journey that suits your mood, passion, or curiosity</p>

        <div className='grid md:grid-cols-3 gap-5 md:mt-[100px] mt-[50px]'>
            <div className='flex flex-wrap gap-5'>
            {imgages.map((item, index)=>(
            <img className='object-cover w-full rounded-[15px]'   src={item} key={index} alt="" />
            ))}
            </div>
            <div className='flex flex-wrap gap-5'>
            {imgages2.map((item, index)=>(
            <img  className='object-cover w-full rounded-[15px]'  src={item} key={index} alt="" />
            ))}
            </div>
            <div className='flex flex-wrap gap-5'>
            {imgages3.map((item, index)=>(
            <img  className='object-cover w-full rounded-[15px]'  src={item} key={index} alt="" />
            ))}
            </div>
        </div>

    </div>
  )
}

export default Gallery