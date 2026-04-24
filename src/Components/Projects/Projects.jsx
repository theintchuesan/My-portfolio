import React from 'react'
import img from '../../assets/gg.jpg'

const Projects = () => {
  

  



  const projects = [
    {
      title: "Project Title 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project Title 2",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      title: "Project Title 3",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      title: "Project Title 4",
      desc: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ]

  return (
    <div id='projects' className='w-full text-white p-10 overflow-hidden'>

      <div className='text-3xl font-bold'>Projects</div>

      <div className='flex flex-wrap gap-10 mt-6'>

        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-black w-60 h-[400px] mt-2 rounded-lg hover:scale-105 transition duration-300'
          >

            {/* IMAGE */}
            <div className='flex justify-center'>
              <img className='p-4 w-[200px] h-50 object-cover' src={img} alt="Project" />
            </div>

            {/* CONTENT */}
            <div className='p-4'>
              <h2 className='text-xl font-bold'>{project.title}</h2>
              <p className='text-sm text-gray-400'>
                {project.desc}
              </p>
            </div>

            {/* BUTTONS */}
            <div className='flex justify-center'>
              <button className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded-3xl m-4'>
                Demo
              </button>

              <button className='bg-gray-500 cursor-pointer hover:bg-gray-600 text-white px-2 py-1 rounded-3xl m-4'>
                Source Code
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
        // <div id='projects' className='w-full text-white  p-10 overflow-hidden object-cover gap-2'>
        //     <div className='text-3xl font-bold'>Projects</div>


        //     <div className='flex  flex-wrap gap-10'>
        //         <div className='bg-black w-60  h-[400px]px mt-2 rounded-lg '>
        //             <div className='items-center justify-center flex'>
        //                 <img className='p-4 [200px] h-50' src={img} alt="Project" />
        //             </div>
        //             <div className='p-4'>
        //                 <h2 className='text-xl font-bold'>Project Title</h2>
        //                 <p className='text-sm text-gray-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //             </div>
        //             <div className='flex justify-center '>
        //                 <button className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded-3xl m-4 '>Demo</button>
        //                 <button className='bg-gray-500 cursor-pointer hover:bg-gray-600 text-white px-2 py-1 rounded-3xl m-4 '>Source Code</button>
        //             </div>
        //         </div>

        //         <div className='bg-black w-60  h-[400px]px mt-2 rounded-lg '>
        //             <div className='items-center justify-center flex'>
        //                 <img className='p-4 [200px] h-50' src={img} alt="Project" />
        //             </div>
        //             <div className='p-4'>
        //                 <h2 className='text-xl font-bold'>Project Title</h2>
        //                 <p className='text-sm text-gray-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //             </div>
        //             <div className='flex justify-center '>
        //                 <button className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded-3xl m-4 '>Demo</button>
        //                 <button className='bg-gray-500 cursor-pointer hover:bg-gray-600 text-white px-2 py-1 rounded-3xl m-4 '>Source Code</button>
        //             </div>
        //         </div>

        //         <div className='bg-black w-60  h-[400px]px mt-2 rounded-lg '>
        //             <div className='items-center justify-center flex'>
        //                 <img className='p-4 [200px] h-50' src={img} alt="Project" />
        //             </div>
        //             <div className='p-4'>
        //                 <h2 className='text-xl font-bold'>Project Title</h2>
        //                 <p className='text-sm text-gray-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //             </div>
        //             <div className='flex justify-center '>
        //                 <button className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded-3xl m-4 '>Demo</button>
        //                 <button className='bg-gray-500 cursor-pointer hover:bg-gray-600 text-white px-2 py-1 rounded-3xl m-4 '>Source Code</button>
        //             </div>
        //         </div>

        //         <div className='bg-black w-60  h-[400px]px mt-2 rounded-lg '>
        //             <div className='items-center justify-center flex'>
        //                 <img className='p-4 [200px] h-50' src={img} alt="Project" />
        //             </div>
        //             <div className='p-4'>
        //                 <h2 className='text-xl font-bold'>Project Title</h2>
        //                 <p className='text-sm text-gray-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //             </div>
        //             <div className='flex justify-center '>
        //                 <button className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded-3xl m-4 '>Demo</button>
        //                 <button className='bg-gray-500 cursor-pointer hover:bg-gray-600 text-white px-2 py-1 rounded-3xl m-4 '>Source Code</button>
        //             </div>
        //         </div>

              

                

                
        //     </div>

        // </div>
  