import React from 'react'
import RevelOnScroll from './RevelOnScroll';

const Projects = () => {
  return (
    <div id='project' className='min-h-screen flex items-center justify-center  py-20'>
        <RevelOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Featured Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                    <h3 className='text-xl font-bold '>Student Management System</h3>
                    <p className='text-grey-400 mb-4'>Created a full-stack Student Management System utilizing Spring Boot, ReactJS, and MySQL.</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {
                            ["React","Tailwind Css","Springboot","Hibernate","mysql"].map((tech,key)=>(
                               <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>{tech} </span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="https://github.com/marnidevdinesh/studentmanagement_backend.git" target='parent' className='text-blue-400 hover:text-blue transition-colors'> view Project </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-5xl mx-auto px-4'>
            {/* <h2 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Featured Projects</h2> */}
            <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                    <h3 className='text-xl font-bold '>Swiggy web application</h3>
                    <p className='text-grey-400 mb-4'>Created a frontend swiggy web application where user can see different restaurents and place arder.</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {
                            ["React","Tailwind Css"].map((tech,key)=>(
                               <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>{tech} </span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="https://github.com/marnidevdinesh/swiggy-webapplication.git" target='parent' className='text-blue-400 hover:text-blue transition-colors'> view Project </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-5xl mx-auto px-4'>
            {/* <h2 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Featured Projects</h2> */}
            <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                    <h3 className='text-xl font-bold '>Ecommers web application</h3>
                    <p className='text-grey-400 mb-3'>Developed a full-stack e-commerce platform with secure JWT-based authentication, session management, and
private routing, along with advanced product search, category filtering, and server-side pagination/sorting using
Spring Data JPA.</p>
                        <p className='text-grey-400 mb-4'>Utilized Redux for centralized state management, ensuring consistent UI behavior and smooth user experience
across the application
</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {
                            ["React","Tailwind Css","Spring Boot","Jwt","Redux"].map((tech,key)=>(
                               <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>{tech} </span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="https://github.com/marnidevdinesh/e-commers.git" target='parent' className='text-blue-400 hover:text-blue transition-colors'> view Project </a>
                    </div>
                </div>
            </div>
        </div>
        </RevelOnScroll>
    </div>
  )
}

export default Projects