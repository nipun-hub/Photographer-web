import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { ImPower } from "react-icons/im";

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto text-center md:my-[250px] my-[80px]  p-5 ">
      
      <div className="grid md:grid-cols-3 gap-20 md:gap-10">

        <div className=" grid justify-center ">
          <div className="rounded-full mx-auto w-[60px] h-[60px] md:w-[80px]  md:h-[80px] bg-[#263238] flex justify-center items-center">
            <IoIosChatbubbles className="text-white text-[28px] md:text-[35px]"  />
          </div>
          <p className="text-[#263238] text-[18px] md:text-[25px] font-bold mt-[30px]">
            Support 24/7
          </p>
          <p className="text-[#81817D] text-[12px] md:text-[18px] font-semibold mt-[20px] max-w-[70%] leading-[18px] md:leading-[25px] mx-auto">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others.
          </p>
        </div>

        <div className=" grid justify-center ">
        <div className="rounded-full mx-auto w-[60px] h-[60px] md:w-[80px]  md:h-[80px] bg-[#263238] flex justify-center items-center">
            <FaUserFriends className="text-white text-[28px] md:text-[35px]"  />
          </div>
          <p className="text-[#263238] text-[18px] md:text-[25px] font-bold mt-[30px]">
            Support 24/7
          </p>
          <p className="text-[#81817D] text-[12px] md:text-[18px] font-semibold mt-[20px] max-w-[70%] leading-[18px] md:leading-[25px] mx-auto">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others.
          </p>
        </div>

        <div className=" grid justify-center ">
        <div className="rounded-full mx-auto w-[60px] h-[60px] md:w-[80px]  md:h-[80px] bg-[#263238] flex justify-center items-center">
            <ImPower className="text-white text-[28px] md:text-[35px]"  />
          </div>
          <p className="text-[#263238] text-[18px] md:text-[25px] font-bold mt-[30px]">
            Support 24/7
          </p>
          <p className="text-[#81817D] text-[12px] md:text-[18px] font-semibold mt-[20px] max-w-[70%] leading-[18px] md:leading-[25px] mx-auto">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
