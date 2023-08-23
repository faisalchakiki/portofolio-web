import Contact from "@/components/Contact";
import HeaderComponent from "@/components/Header";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from 'react'
// import NavButton from "@/components/navButton";

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     // easing: "ease-out-cubic",
  //     once: true,
  //     // duration:"1000",
  //   });
  // });
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Faisal Chakiki | Fullstack Developer</title>
      </Head>
      <Navbar />
      <div className="z-0 absolute top-[-1%] left-[-50%] lg:top-[-20%] lg:left-[-70%] w-[130%] lg:w-[150%] lg:h-[180vh]">
        <Image
          src={require("../../public/assets/img/bg-moon.svg")}
          className="w-full h-[100%]"
          alt=""
          object-fit="contain"
          priority
        />
      </div>
      <a className="right-5 bottom-5 fixed z-50 text-[30px] md:text-[40px]" href="#top">⬆️</a>
      <HeaderComponent />
      <Project /> 
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
