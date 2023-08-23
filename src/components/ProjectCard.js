import Image from "next/image"
import { useState } from "react"

function ProjectCard({data, index, showModal}) {
  // const [dataModal , setSelectedModal] = useState()
  return (
    <div key={index} className="rounded-[10px]">
      <div className="relative w-full h-[200px] bigHp:h-[280px] sm:h-[200px] lg:h-[300px] rounded mb-2 md:mb-4 group overflow-hidden shadow-lg shadow-slate-600">
        <Image className="w-full h-[100%] object-cover object-center transition-opacity" 
            src={data.srcImage[0]} object-fit="contain"
            width="100"
            height="100" alt="image-porto" lazy/>
        <div className="absolute hidden items-center justify-center group-hover:bg-slate-600 group-hover:bg-opacity-80 top-0 group-hover:bottom-0 z-10 right-0 left-0 gap-5 group-hover:flex transition-all">
          <a href={data.srcGitRepo} target="_blank">
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
          <a href={data.srcDeploy} target="_blank">
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
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-semibold title-font">{data.nameProject} <span className="tracking-widest text-yellow-500 text-sm font-medium title-font">{data.year}</span></h2>
        <button 
        className="btn btn-ghost" 
        onClick={()=> showModal(data)}>👁️
        </button>
      </div>
      {/* MODAL */}
      {/* <dialog id="myModal" className="modal relative modal-bottom md:modal md:flex md:justify-center md:items-center">
      {dataModal &&  <form method="dialog" className="modal-box w-full md:w-8/12 lg:w-5/12 max-w-5xl py-10 max-h-[85vh] overflow-y-auto scrollbar">
      <Image className="w-full h-[350px] border rounded-lg transition-opacity mb-5" 
                src={dataModal?.srcImage[0]} object-fit="contain"
                width="100"
                height="100" alt="image-porto"/>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h2 className="text-2xl font-semibold title-font mb-1">{dataModal?.nameProject} <span className="tracking-widest text-yellow-500 text-sm font-medium title-font">{dataModal?.year}</span></h2> 
          <p className="text-lg">{dataModal?.details}</p>
        </form>}
      </dialog> */}
   </div>
   
  )
}

export default ProjectCard