import React from 'react'
import img from '../../assets/gg.jpg'

const Projects = () => {
  const projects = [
    { title: "Project 1", desc: "Description here" },
    { title: "Project 2", desc: "Description here" },
    { title: "Project 3", desc: "Description here" },
    { title: "Project 4", desc: "Description here" },
  ]

  return (
    <div id='projects' className='w-full text-white p-6 md:p-10'>

      <h1 className='text-3xl font-bold'>Projects</h1>

      <div className='flex flex-wrap gap-10 mt-6 justify-center'>

        {projects.map((p, i) => (
          <div key={i} className='bg-black w-60 rounded-lg hover:scale-105 transition'>

            <img className='p-4 w-full h-40 object-cover' src={img} alt="" />

            <div className='p-4'>
              <h2 className='font-bold'>{p.title}</h2>
              <p className='text-sm text-gray-400'>{p.desc}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects