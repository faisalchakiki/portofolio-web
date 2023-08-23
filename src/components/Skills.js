import Image from "next/image";
// import NavButton from "./navButton";
import dataSkill from '../data/skills.json'

function Skills() {
  return (
    <section id='page3' className="px-[8%] md:px-[10%] py-10 relative">
      <h1 className="text-[2.0rem] sm:text-[2.3rem] md:text-[2.8rem] xl:text-[3.5rem] tracking-wide mx-auto w-fit mb-10 lg:mb-20">Skills & Educations</h1>
      <main className="flex flex-col lg:flex-row justify-between items-start">
        <section className="grid grid-cols-4 lg:w-[50%] sm:grid-cols-5 lg:grid-cols-4 gap-5 md:gap-7 mx-auto mb-10">
          {dataSkill.map((skill,index) => (
            <div key={index} className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] xl:w-[130px] xl:h-[130px] 2xl:w-[150px] 2xl:h-[150px] bg-slate-300 flex rounded-full'>
              <Image
                src={skill.src}
                className="w-full h-[100%]"
                alt={skill.name}
                object-fit="contain"
                width="100"
                height="100"
              />
            </div>
          ))}
        </section>
        <section className="flex-1 flex lg:flex-col lg:items-center justify-between lg:justify-center lg:px-10 gap-2 w-full">
          <div className="mb-5 flex flex-col lg:items-center lg:justify-center gap-3 flex-1">
          <h2 className="text-lg md:text-2xl font-gloock font-semibold tracking-widest text-yellow-500 mb-3 text-left w-full lg:w-fit">Non-Formal</h2>
            <div>
              <h1 className="text-sm md:text-xl lg:text-center mb-1 md:mb-2 font-bold tracking-wide">Dicoding <span className="text-yellow-500 text-[10px] sm:text-[14px]">( MAR 2023 )</span></h1>
              <p className="text-[12px] md:text-lg lg:text-center">Belajar Dasar Javascript dan Backend</p>
            </div>
            <div>
              <h1 className="text-sm md:text-xl lg:text-center mb-1 md:mb-2 font-bold tracking-wide">FAZZTRACK <span className="text-yellow-500 text-[10px] sm:text-[14px]">( NOV 2022 - MAR 2023 )</span></h1>
              <p className="text-[12px] md:text-lg lg:text-center">Bootcamp Fullstack Web Developer</p>
            </div>
          </div>
          <div className="mb-5 flex flex-col lg:items-center lg:justify-center gap-3 flex-1">
            <h2 className="text-lg md:text-2xl font-gloock font-semibold tracking-widest text-yellow-500 mb-3 text-left w-full lg:w-fit">Formal</h2>
            <div>
              <h1 className="text-sm md:text-xl lg:text-center mb-1 md:mb-2 font-bold tracking-wide">MA D-BAITO SUNAN PLUMBON <span className="text-yellow-500 text-[10px] sm:text-[14px]">( JUL 2019 - MAY 2023 )</span></h1>
              <p className="text-[12px] md:text-lg lg:text-center">Ilmu Bahasa dan Budaya</p>
            </div>
            <span className="mt-5 uppercase hidden lg:block pb-2 border-b-2">nb: no work experience yet</span>
          </div>
        </section>
          <span className="mt-5 uppercase block lg:hidden pb-2 text-[12px] border-b-2">nb: no work experience yet</span>
      </main>
      <div className="z-0 absolute top-[-25%] right-[-80%] w-[200%] h-[180vh]">
        <Image
          src={require("../../public/assets/img/bg-moon.svg")}
          className="w-full h-[100%] z-0"
          alt=""
          object-fit="contain"
          priority
        />
      </div>
      {/* <NavButton active='page3' /> */}
    </section>
  )
}

export default Skills;