import React from 'react'
import img from '../../assets/gg.jpg'
import  SectionWrapper  from '../SectionWrapper'


const Projects = () => {
  const projects = [
    { title: "AI Assistant", desc: "The AI Assistant is a conversational AI that can answer questions and provide assistance." , button :"Demo",button2:"Code"},
    { title: "e-Commerce Platform", desc: "A full-featured online shopping experience." , button :"Demo",button2:"Code"},
    { title: "c# Application", desc: "A modern c# application with a clean UI." , button :"Demo",button2:"Code"},
    { title: "Python Script", desc: "A Python script for data analysis." , button :"Demo",button2:"Code"},
  ]

  return (
    <div id='projects' className='w-full text-white p-6 md:p-10'>

      <SectionWrapper>
        <h2 className="section-title">Projects</h2>
      </SectionWrapper>

      <div className='flex flex-wrap gap-10 mt-6 justify-center relative'>

        {projects.map((p, i) => (
          <div key={i} className='bg-black w-60 h-90 rounded-lg justify-center hover:scale-105 transition'>

            <img className='p-4 w-full h-40 object-cover' src={img} alt="" />

            <div className=' flex flex-col gap-2 p-4'>
              <h2 className='font-bold'>{p.title}</h2>
              <p className='text-sm text-gray-400'>{p.desc}</p>
              
            </div>
            <div className='flex gap-10 justify-center ml-4  absolute bottom-2'>
              <button className='bg-blue-900 px-4 py-1 rounded-4xl  hover:bg-blue-950 cursor-pointer'>{p.button}</button>
              <button className='bg-gray-500 px-4 py-1 rounded-4xl  hover:bg-gray-600 cursor-pointer'>{p.button2}</button>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects





//  <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg'>
//                   {p.button}
//                 </button>
//                 <button className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg'>
//                   {p.button2}
//                 </button>