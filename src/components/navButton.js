const NavButton = ({active}) => {
  return (
    <div className="z-5 absolute top-[45%] left-[2%] flex flex-col gap-2">
      <a href="#page1"><div className={`w-4 h-4 bg-white rounded-full hover:border-[3px] hover:border-blue-500 cursor-pointer transition-all active:bg-black ${active === 'page1' && `border-[3px] bg-black border-blue-500`}`} /></a>
      <a href="#page2"><div className={`w-4 h-4 bg-white rounded-full hover:border-[3px] hover:border-blue-500 cursor-pointer transition-all active:bg-black ${active === 'page2' && `border-[3px] bg-black border-blue-500`}`} /></a>
      <a href="#page3"><div className={`w-4 h-4 bg-white rounded-full hover:border-[3px] hover:border-blue-500 cursor-pointer transition-all active:bg-black ${active === 'page3' && `border-[3px] bg-black border-blue-500`}`} /></a>
      <a href="#page4"><div className={`w-4 h-4 bg-white rounded-full hover:border-[3px] hover:border-blue-500 cursor-pointer transition-all active:bg-black ${active === 'page4' && `border-[3px] bg-black border-blue-500`}`} /></a>
    </div>
  )
}

export default NavButton;