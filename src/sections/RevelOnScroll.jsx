import React, { useEffect, useRef } from 'react'

const RevelOnScroll = ({children}) => {
    const ref=useRef(null)

    useEffect(()=>{
        const observer=new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    ref.current.classList.add("visible");
                }
            },
            {threshold:0.2, rootMargin:"0px 0px -50px 0px"}
        );
        if(ref.current)observer.observe(ref.current)
            return ()=>observer.disconnect()
    })
  return (
    <div ref={ref} className='revel'>
        {children}
    </div>
  )
}

export default RevelOnScroll