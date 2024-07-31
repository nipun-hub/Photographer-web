import React from "react";
import logo from "../assets/logo2.jpg";
import header from "../assets/header/header1.jpg";
import header1 from "../assets/header/1.jpg";
import header2 from "../assets/header/2.jpg";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[140px] md:px-10" id="home">
      <div className="w-full grid p-5 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-[45px] md:text-[60px] md:font-extrabold font-bold leading-[50px] md:leading-[70px]">
            Unlock The <br/>Gods Level Of<br/> Memories
          </p>
          <p className="text-[16px] md:text-[20px] mt-[30px] leading-[23px]">
            We're the premier photographers,<br/> seamlessly blending creativity with<br/>
            professionalism
          </p>
          <div className="border mt-[50px] border-black rounded-full flex justify-between w-full ">
            <p className="p-4 md:py-5 md:px-7 text-[16px] md:text-[22px]">Our Experience</p>
            <div className="bg-black rounded-full px-3">
              <p className="p-4 md:py-5 md:px-7 text-[16px] md:text-[22px] text-white">80+ Year</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-[50px]">
            <img src={logo} alt="" className=" p-5 " />
            <div className="text-center grid p-5  gap-3 text-[16px]">
              <img src={logo} alt=""  />
              <p>SINCE 1940</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-[30px]  md:mt-0">
          <img src={header} className="w-full rounded-[10px]" alt="" />
          <div className="w-full  items-center rounded-[10px] bg-black text-white flex p-5 justify-between">
            <p className="text-[12px] md:text-[20px]">Gunarathna Studio</p>
            <p className="text-[12px] md:text-[20px]">Balangoda</p>
          </div>
          <div className="grid gap-5 w-full grid-cols-2 ">
          <img src={header1} className="w-full rounded-[10px] max-h-[170px] object-cover" alt="" />
          <img src={header2} className="w-full rounded-[10px] max-h-[170px] object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
