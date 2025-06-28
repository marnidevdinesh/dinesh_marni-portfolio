import React, { useState } from 'react'
import RevelOnScroll from './RevelOnScroll'
import emailjs from 'emailjs-com'

const Contact = () => {

  const SERVICE_ID="service_v2lkiun"
  const TEMPLATE_ID="template_6a2tbib"
  const PUBLIC_KEY="8ItIU2CPCF-DeFZr8";

const[formdata,setformdata]=useState({
name:"",
email:"",
message:""
})

let handlesubmit=(e)=>{
// e.perventDefault();
e.preventDefault();
console.log(formdata)
setformdata({
      name: "",
      email: "",
      message: ""
    });
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((reult)=>{
      alert("message Sent")
    }).catch(()=>{alert("oops data not sent")})

}
let handledata=(e)=>{
  let{value,name}=e.target
  setformdata({...formdata,[name]:value})
  // console.log(formdata)
}
// console.log(formdata)

  return (
    <div id='contact' className='min-h-screen flex items-center justify-center py-20'>
        <RevelOnScroll>
            <div className='px-4 w-150'>
                <h2 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Get In Touch</h2>
             
                    <form action="" className='space-y-6'onSubmit={handlesubmit} >
                        <div className='relative'>
                           <input type="text" name="name" id="name" value={formdata.name} onChange={handledata} required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focs:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='name'/>
                        </div>
                        <div className='relative'>
                           <input type="email" name="email" id="email" value={formdata.email}  onChange={handledata} required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focs:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='email@gmail.com'/>
                        </div>
                        <div className='relative'>
                           <textarea name="message" id="name" rows={5} value={formdata.message}  onChange={handledata} required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focs:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='message'/>
                        </div>
                        <button type='submit'  className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246.0.4)] '>submit</button>
                    </form>
               
            </div>
        </RevelOnScroll>
    </div>
  )
}

export default Contact