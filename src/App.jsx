import React, { useState } from 'react'
import Loadingscreen from './sections/Loadingscreen'
import "./index.css"
import Navbar from './sections/Navbar'
import Mobilemenu from './sections/Mobilemenu'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {

  const[isloadin,setisloading]=useState(false)
  const[menuopen,setmenuopen]=useState(false)

  return (
    <div>
      {!isloadin && <Loadingscreen  onComplete={()=>setisloading(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isloadin?"opacity-100":"opacity-0"} bg-black text-gray-100`}>
        <Navbar menuopen={menuopen} setmenuopen={setmenuopen}/>
        <Mobilemenu menuopen={menuopen} setmenuopen={setmenuopen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        </div>
    </div>
  )
}

export default App