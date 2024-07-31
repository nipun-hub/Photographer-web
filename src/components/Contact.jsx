import React from "react";


import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto text-center  mt-[100px] p-5 " id="contact">
      <p className="text-[18px] md:text-[40px] font-bold text-[#263238]">
        Contact Us
      </p>
      <p className="text-[12px] md:leading-9 md:text-[25px]  font-semibold text-[#AFADAD] mt-[10px] md:mt-[35px]">
        Explore our diverse range of categories and embark on a reading{" "}
        <br className="md:flex hidden" /> journey that suits your mood, passion,
        or curiosity
      </p>

      <div className="grid md:grid-cols-3 gap-10  md:mt-[100px] mt-[50px]">
        <div className=" grid justify-center ">
          <div>
          <div className="rounded-full mx-auto w-[60px] h-[60px] md:w-[80px]  md:h-[80px] bg-[#0EA5E9] flex justify-center items-center">
            <FaPhoneAlt className="text-white text-[28px] md:text-[35px]" />
          </div>
            
          <p className="text-[#263238] text-[18px] md:text-[25px] font-bold mt-[30px]">
            Phone
          </p>
          <p className="text-[#81817D] text-[12px] md:text-[18px] font-semibold mt-[20px] leading-[18px] md:leading-[25px] mx-auto">
          077 344 1044 
          </p>
          </div>
        </div>

        <div className=" grid justify-center ">
            <div>

          <div className="rounded-full mx-auto w-[60px] h-[60px] md:w-[80px]  md:h-[80px] bg-[#0EA5E9] flex justify-center items-center">
            <FaLocationDot className="text-white text-[28px] md:text-[35px]" />
          </div>
          <p className="text-[#263238] text-[18px] md:text-[25px] font-bold mt-[30px]">
            Address
          </p>
          <p className="text-[#81817D] text-[12px] md:text-[18px] font-semibold mt-[20px] max-w-[100%] leading-[18px] md:leading-[25px] mx-auto">
            Resthouse Approach Road,<br/> Balangoda,<br/> Rathnapura SG,<br/> Sri Lanka
          </p>
            </div>
        </div>

        <div className=" grid justify-center ">
            <div>

          <div className="rounded-full mx-auto w-[60px] h-[60px] md:w-[80px]  md:h-[80px] bg-[#0EA5E9] flex justify-center items-center">
            <IoMail className="text-white text-[28px] md:text-[35px]" />
          </div>
          <p className="text-[#263238] text-[18px] md:text-[25px] font-bold mt-[30px]">
            Eamil
          </p>
          <p className="text-[#81817D] text-[12px] md:text-[18px] font-semibold mt-[20px]  leading-[18px] md:leading-[25px] mx-auto">
          gunarathnadigital@gmail.com
          </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
