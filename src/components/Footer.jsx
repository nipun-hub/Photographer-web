import React from "react";

const Footer = () => {
  return (
    <div className="border-t ">
      <div className="max-w-7xl grid gap-2 md:flex mx-auto py-[20px] md:justify-between p-10">
        <p className="md:text-[18px] text-[12px] text-center opacity-60 leading-[16px]">Copyright © 1940-2024 Gunarathna Studio. All Rights Reserved.</p>
        <p className=" text-[18px] hidden  md:flex opacity-60"> Designed By <span className="underline ml-2"> Nipun Theekshana</span></p>
      </div>
    </div>
  );
};

export default Footer;
