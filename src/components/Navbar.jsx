import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo2.jpg";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) {
        if (currentScrollY > 800) {

        }
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down
          setIsNavbarVisible(false);
          setToggleMenu(false);
        } else {
          // Scrolling up
          setIsNavbarVisible(true);
        }
      } else {
        setIsNavbarVisible(true);
        setBg(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed  bg-white 
      ${toggleMenu ? "bg-white" : ""} 

      
      
      z-40 left-0 right-0 top-0 transition-all duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between py-10 items-center md:px-10 px-5">
        <a href="#">
          <img className="md:h-[50px] h-[45px]" src={logo} alt="" />
        </a>
        <div className="text-black  gap-10 font-semibold md:flex hidden"><a
          href="#home"
          className=" transition-all duration-300"
        >
          Home
        </a>
          <a href="#Category" className="  transition-all duration-300">
            Top Category
          </a>
          <a href="#gallary" className="  transition-all duration-300">
            We Are Gallery
          </a>
          {/* <a href="#contact" className="  transition-all duration-300">
            Contact
          </a> */}
        </div>
        <a href="#contact"> <button className="text-white bg-black py-3 px-5 rounded-full md:flex hidden">Contact Us</button></a>
        <button onClick={handleToggleMenu} className="md:hidden">
          <div
            className={`w-[40px]  h-[4px] transition-all duration-300 bg-black  ${toggleMenu ? " rotate-45 translate-y-[12px]" : ""
              }`}
          ></div>
          <div
            className={`w-[40px] mx-auto h-[4px] transition-all duration-150 bg-black my-2 ${toggleMenu ? "opacity-0 w-0 " : "opacity-100"
              }`}
          ></div>
          <div
            className={`w-[40px]  h-[4px] transition-all duration-300 bg-black  ${toggleMenu ? "translate-y-[-12px] -rotate-45" : ""
              }`}
          ></div>
        </button>
      </div>
      <div
        className={`${toggleMenu ? "py-[50px] h-[350px] border-t" : "h-0"
          } max-w-7xl overflow-hidden  transition-all duration-300 mx-auto grid  gap-10 text-black text-[22px] text-center `}
      >
        <a
          href="#talent"
          className=" transition-all duration-300"
        >
          Home
        </a>
        <a href="#service" className="  transition-all duration-300">
          Top Category
        </a>
        <a href="#team" className="  transition-all duration-300">
          We Are Gallery
        </a>
        <a href="#contact" >

          <button className="bg-black text-white hover:bg-opacity-60 transition-all duration-300 w-[200px] mx-auto rounded-full py-3">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
