import React, { useEffect } from 'react'

const Navbar = ({menuopen,setmenuopen}) => {

    useEffect(()=>{
        document.body.style.overflow=menuopen?"hidden":""
    },[menuopen])

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10.10.8)] backdrop-blur-lg border-b  border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <a href="#home" className='font-mono text-xl font-bold text-white'/>
                <a><span className='text-shadow-indigo-300'>DEV </span>DINESH</a>

                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={()=>setmenuopen((prev)=>!prev)}>
                    &#9776;
                </div>
                <div className='hidden md:flex items-center space-x-8'>

                    <a href='#home'  className='text-gray-500 hover:text-white transition-colors'>Home</a>
                    <a href='#about' className='text-gray-500 hover:text-white transition-colors'>About</a>
                    <a href='#project' className='text-gray-500 hover:text-white transition-colors'>Project</a>
                    <a href='#contact' className='text-gray-500 hover:text-white transition-colors'>Contact</a>

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar