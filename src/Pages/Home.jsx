import React, { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "../components/Header";
import Category from "../components/Category";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import Album from "../components/Album";
import Contact from "../components/Contact";

const Home = () => {

  // useEffect(() => {
  //   AOS.init();
  // }, [])

  return (
    <>
      <Header/>
      <Category/>
      <Gallery/>
      <Service/>
      <Album/>
      <Contact/>
    </>
  );
};

export default Home;
