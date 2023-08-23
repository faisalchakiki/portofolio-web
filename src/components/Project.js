import { useState } from "react";
import Image from "next/image";
// import NavButton from "./navButton";
import ProjectCard from '../components/ProjectCard'
import dataProjectWeb from '../data/projectWeb.json'
import dataProjectMobile from '../data/projectMobile.json'

export default function Project() {
  const [selected , setSelected] = useState('web')
  const [dataModal , setSelectedModal] = useState()
  const showModal = (dataDetails) => {  
    setSelectedModal(dataDetails)
    return window.myModal.showModal()
  }
  return (
    <section id='page2' className="px-[8%] md:px-[10%] py-10 relative mb-16 z-10">
        <h1 className="text-[2.0rem] sm:text-[2.3rem] md:text-[2.8rem] xl:text-[3.5rem] tracking-wide mx-auto w-fit mb-10">Latest Project</h1>
        <div className="flex relative items-center justify-between sm:w-[70%] md:w-[40%] mx-auto gap-5 border-b-2 pb-2 mb-10">
          <div onClick={() => setSelected('web')} className={`hover:bg-white hover:rounded-lg w-[30%] transition-all duration-500 cursor-pointer active:scale-90 select-none ${selected === 'web' && 'bg-yellow-500 hover:bg-yellow-500 transition-transform flex-1 rounded-lg'}`}>
            <p className={`ml-2 font-semibold tracking-wider hover:text-black transition-all text-md sm:text-lg md:text-xl text-center ${selected === 'web' && 'text-black'}`}>Website</p>
          </div>
          <div onClick={() => setSelected('mobile')} className={`hover:bg-white hover:rounded-lg w-[30%] transition-all duration-500  cursor-pointer active:scale-90 select-none ${selected === 'mobile' && 'bg-yellow-500 hover:bg-yellow-500 flex-1 transition-transform rounded-lg'}`}>
            <p className={`ml-2 font-semibold tracking-wider hover:text-black transition-all text-md sm:text-lg md:text-xl text-center ${selected === 'mobile' && 'text-black'}`}>Mobile  </p>
          </div>
          <span className={`w-[30%] absolute bg-yellow-500 bottom-[-2px] h-[2px] ${selected === 'mobile' ? 'left-0' : 'right-0'}`}/>
          <span className={`w-[10%] absolute bg-yellow-500 bottom-[-2px] h-[2px] ${selected === 'mobile' ? 'right-0' : 'left-0'}`}/>
        </div>
        {/* <main className="flex flex-wrap justify-evenly items-center gap-10"> */}
        <main className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center gap-10">
        {selected === 'web' ? dataProjectWeb.map((data, index) => {
          if(data){
            return <ProjectCard data={data} index={index} showModal={showModal} />
          }else{
            return <span className="loading loading-dots loading-lg"></span>
          }
        }) : dataProjectMobile.map((data, index) => {
          if(data){
            return <ProjectCard data={data} index={index} showModal={showModal} />
          }else{
            return <span className="loading loading-dots loading-lg"></span>
          }
        }
        )}
        </main>
        {/* <NavButton active='page2' /> */}
        {/* MODAL */}
        <dialog id="myModal" className="modal modal-bottom md:modal md:flex md:justify-center md:items-center">
        {dataModal &&  <form method="dialog" className="modal-box w-full md:w-8/12 lg:w-5/12 max-w-5xl py-10 max-h-[85vh] overflow-y-auto scrollbar">
        <Image className="w-full h-[350px] border rounded-lg transition-opacity mb-3" 
            src={dataModal?.srcImage[0]} object-fit="contain"
            width="100"
            height="100" alt="image-porto"/>
            <div className="flex items-center gap-x-5 justify-center mb-3">
              <a href={dataModal.srcGitRepo} target="_blank">
                <div>
                  <Image
                  src={require("../../public/assets/logo/github-negative.svg")}
                    className="w-8 h-8"
                    alt=""
                    object-fit="cover"
                    priority
                  />
                </div>
              </a>
              <a href={dataModal.srcDeploy} target="_blank">
                <div>
                  <Image
                  src={require("../../public/assets/logo/browser.svg")}
                    className="w-10 h-10"
                    alt=""
                    object-fit="cover"
                    priority
                  />
                </div>
              </a>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h2 className="text-xl md:text-2xl font-semibold title-font mb-1">{dataModal?.nameProject} <span className="tracking-widest text-yellow-500 text-sm font-medium title-font">{dataModal?.year}</span></h2> 
            <p className="text-md md:text-lg mb-1">{dataModal?.details}</p>
            <p className="text-md md:text-lg font-semibold tracking-wider">Technologys : <span className="text- font-normal">{dataModal?.technology}</span></p>
          </form>}
        </dialog>
      </section>
  );
}
