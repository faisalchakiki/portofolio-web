import Image from "next/image";
import NavButton from "./navButton";
// import { useState } from 'react';

const HeaderComponent = () => {
  return (
    <header id="page1" className="flex relative flex-col justify-center px-[8%] md:px-[10%] py-[1%] pb-[10%] min-h-[100vh]">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-7">
        <label htmlFor="modal-profile">
          <div className="border-2 border-slate-500 rounded-full" title="I'm Fine, You ?">
            <Image alt="" src={require('../../public/assets/img/personal-2.jpg')} priority className="w-32 sm:w-28 select-none cursor-pointer rounded-full hover:scale-[1] hover:shadow-md hover:-rotate-12 hover:translate-x-2 transition-all duration-300 ease-in-out" />
          </div>
        </label>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-fit">
          <div className="w-[50%] sm:w-[60px] bg-white h-[2px] my-3 sm:my-0"></div>
          <p className="ml-2 font-semibold tracking-wider text-xl">Available For Work</p>
        </div>
      </div>
      <div className="tracking-widest leading-relaxed w-[90%] sm:w-[70%] mx-auto sm:mx-0 mb-5 text-center sm:text-left">
        <span className="text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] xl:text-[4.8rem] transparent">Hello, </span>
        <span className="text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] xl:text-[4.8rem] transparent">I&rsquo;m Faisal.</span>
        <br />
        <span className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4.5rem] font-bold">I&rsquo;m developer </span>
        <span className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4.5rem] font-bold">a website </span>
        <span className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4.5rem] font-bold">on the </span>
        <span className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4.5rem] font-bold">Front-end </span>
        <span className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4.5rem] font-bold">and </span>
        <span className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4.5rem] font-bold">Back-end.</span>
      </div>
      <a href="/resume.pdf" target="/blank" className="btn w-fit tracking-wider text-md md:text-lg text-white mx-auto sm:mx-0 bg-blue-500 border-0 md:py-7 md:px-10 focus:outline-none hover:bg-indigo-500 active:bg-indigo-60">
        <div
          className="flex justify-center items-center gap-2 w-full h-[100%]"
        >
          <p className="font-normal">Download CV</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
          </svg>
        </div>
      </a>
      {/* <NavButton active="page1" /> */}
      {/* MODAL IMAGE */}
      <input type="checkbox" id="modal-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box shadow-none w-[55%] rounded-full p-0 bg-transparent">
          <Image alt="" src={require('../../public/assets/img/personal-2.jpg')} priority className="w-full rounded-full" />
        </div>
        <label className="modal-backdrop bg-black opacity-70" htmlFor="modal-profile">Close</label>
      </div>
    </header>
  )
}

export default HeaderComponent;

//Seperti bulan yang mencerminkan cahaya matahari, belajarlah untuk mencerminkan kebijaksanaan dan pengetahuan. Jadikan setiap fase belajar sebagai langkah menuju puncak keberhasilan, karena seperti bulan yang berubah bentuk, kita juga akan terus berubah dan tumbuh menjadi versi terbaik dari diri kita. 