import React from 'react'
// import NavButton from "@/components/navButton";
import Image from 'next/image';

function Contact() {
  return (
    <section id="page4" className="min-h-screen px-[8%] md:px-[10%] py-10 relative">
        <h1 className="text-[2.0rem] sm:text-[2.3rem] md:text-[2.8rem] xl:text-[3.5rem] tracking-wide mx-auto w-fit mb-10">Contact Me</h1>
        {/* <p className="text-2xl text-center mb-5 tracking-wide font-semibold italic">Don't be reluctant. If you are interested, or want to say Hello.</p> */}
        <div className="xl:w-1/2 lg:w-2/3 md:w-4/5 mx-auto">
          <form 
            action="https://formsubmit.co/f124a2c784490f4a4be8b522abf40e57"
            method="POST" 
            className="flex flex-wrap">
            <section className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-10 text-md md:text-lg lg:text-xl text-white">Name :</label>
                <input type="text" id="name" name="name" className="w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-500 py-2 px-2 md:leading-8 transition-colors duration-200 ease-in-out" required />
              </div>
            </section>
            <section className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-10 text-md md:text-lg lg:text-xl text-white">Email :</label>
                <input type="email" id="email" name="email" className="w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-500 py-2 px-2 md:leading-8 transition-colors duration-200 ease-in-out" required />
              </div>
            </section>
            <section className="p-2 w-full">
              <div className="relative">
                <label htmlFor="subject_email" className="leading-10 text-md md:text-lg lg:text-xl text-white">Subject :</label>
                <input type="subject_email" id="subject_email" name="subject_email" className="w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-500 py-2 px-2 md:leading-8 transition-colors duration-200 ease-in-out" required />
              </div>
            </section>
            <section className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-10 text-md md:text-lg lg:text-xl text-white">Message :</label>
                <textarea rows="10" required id="message" name="message" className="w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-500 py-2 px-2 resize-none leading-4 md:leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </section>
            <section className="p-2 w-full">
              <button type="submit" className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 active:bg-indigo-600 md:py-3 md:px-10 rounded text-lg">Send Message</button>
              {/* {success && <p className="text-lg text-green-500 font-semibold tracking-wide text-right">Message Successfully Sent✅</p>} */}
            </section>              
          </form>
          <div className="flex flex-col md:flex-row items-center justify-center py-10 gap-5">
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-center tracking-wide font-semibold italic">Don't be reluctant. If you are interested, or want to say Hello.</p>
            <div className="flex gap-5">
              <a href="https://wa.me/6285742385602" target="_blank" aria-label="whatsapp contact" >
                <div className="w-[45px] h-[45px] md:w-[64px] md:h-[64px] lg:w-[72px] lg:h-[72px] bg-[linear-gradient(0deg,#20B038_0%,#60D66A_100%)] border-[3px] border-neutral-1 p-[13px] rounded-full shadow-5">
                <Image
                  src='/assets/logo/wa.png'
                  className="w-full h-[100%]"
                  alt='whatsapp'
                  object-fit="contain"
                  width="100"
                  height="100"
                />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/faisal-chakiki/" target="_blank" aria-label="linkedin profile" >
                <div className="w-[45px] h-[45px] md:w-[64px] md:h-[64px] lg:w-[72px] lg:h-[72px] bg-white border-[3px] border-white p-[13px] rounded-full shadow-5">
                <Image
                  src='/assets/logo/linkedin-ori.svg'
                  className="w-full h-[100%]"
                  alt='linkedin'
                  object-fit="contain"
                  width="100"
                  height="100"
                />
                </div>
              </a>
              <a href="https://www.instagram.com/chakiki_08/" target="_blank" aria-label="instagram profile" >
                <div className="w-[45px] h-[45px] md:w-[64px] md:h-[64px] lg:w-[72px] lg:h-[72px] bg-bg-ig bg-cover p-[13px] rounded-full shadow-5">
                <Image
                  src='/assets/logo/instagram-negative.svg'
                  className="w-full h-[100%]"
                  alt='instagram'
                  object-fit="contain"
                  width="100"
                  height="100"
                />
                </div>
              </a>         
            </div>
          </div>
        </div>
        {/* <NavButton active='page4' /> */}
        <div className="absolute bottom-1 right-1 text-sm" >
          <a href="https://www.freepik.com/free-photo/starry-night-sky_7061153.htm#query=star%20background&position=1&from_view=keyword&track=ais">Image by kjpargeter</a> on Freepik
        </div> 
      </section>
  )
}

export default Contact