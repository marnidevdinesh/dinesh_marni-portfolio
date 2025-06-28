import React from 'react'
import RevelOnScroll from './RevelOnScroll';

const About = () => {

    const frontendskills=["HTML","CSS","Bootstrap","JavaScript","React js","Tailwindcss"];
    const banckendSkills=["java","jdbc","servlet","Springboot"]

  return (
    <section id='about'
    className='min-h-screen flex items-center justify-center py-20'
    >
        <RevelOnScroll>
            <div className='max-w-3xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent '>About me</h2>

                <div className=' rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                    <p className='text-gray-300 mb-6'>
                        Passionate developer with expertise in building web applications
                        and creating innovative solutions.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>Frontend </h3>
                                <div className='flex flex-wrap gap-2'>
                                {frontendskills.map((tech,key)=>(
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>{tech} </span>
                                ))}
                                </div>
                        </div>
                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>Backend </h3>
                                <div className='flex flex-wrap gap-2'>
                                {banckendSkills.map((tech,key)=>(
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>{tech} </span>
                                ))}
                                </div>
                        </div>
                    </div>
                    
                </div>

                  <div className=''>
                    <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-bold mb-4'>Education</h3>
                                <ul className='list-disc list-inside space-y-2 text-grey-300'>
                                    <li>
                                        <strong>B.E computer Science</strong>- [2020-2024]
                                        <ul>
                                            <li>sathyabama University</li>
                                        <li>CGPA-7.54</li>
                                        </ul>
                                    </li>
                                </ul>
                    </div>
                    </div>              

            </div>
            </RevelOnScroll>
    </section>
  )
}

export default About