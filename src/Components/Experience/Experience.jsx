import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaDocker, FaGithub, FaAmazon } from 'react-icons/fa'
import { SiExpress, SiC, SiKotlin, SiMongodb, SiMysql, SiPostgresql, SiSqlite, SiTensorflow, SiPytorch, SiAndroidstudio, SiNetflix } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

const Experience = () => {
  return (
    <div id='experience' className='w-full text-white flex flex-col gap-10 p-6 md:p-10'>

      <h1 className='text-3xl font-bold'>Experience</h1>

      <div className='flex flex-col md:flex-row gap-10'>

        {/* ICONS */}
        <div className="w-full md:w-2/5 flex flex-wrap gap-6 text-4xl">

          <FaReact className="text-cyan-400" />
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
          <FaJs className="text-yellow-400" />

          <FaNodeJs className="text-green-500" />
          <SiExpress className="text-gray-300" />

          <FaJava className="text-red-500" />
          <SiC className="text-blue-400" />
          <SiKotlin className="text-purple-400" />

          <SiMongodb className="text-green-500" />
          <SiMysql className="text-blue-400" />
          <SiPostgresql className="text-indigo-400" />
          <SiSqlite className="text-gray-400" />

          <SiTensorflow className="text-orange-400" />
          <SiPytorch className="text-red-400" />

          <FaDocker className="text-blue-400" />
          <FaGithub className="text-gray-200" /> {/* GitHub is usually white/black */}

          <SiAndroidstudio className="text-green-400" />

        </div>

        {/* CARDS */}
        <div className='flex flex-col gap-6 w-full'>

          <div className='bg-[#171d45] p-4 rounded-lg flex gap-4'>
            <FcGoogle className="text-3xl" /> {/* already original color */}
            <div>
              <h2 className='font-bold'>Software Engineer, Google</h2>
              <p className='text-xs'>Worked on web apps using React & Node.js.</p>
            </div>
          </div>

          <div className='bg-[#171d45] p-4 rounded-lg flex gap-4'>
            <SiNetflix className="text-red-600 text-3xl" />
            <div>
              <h2 className='font-bold'>Software Engineer, Netflix</h2>
              <p className='text-xs'>Worked on scalable systems.</p>
            </div>
          </div>

          <div className='bg-[#171d45] p-4 rounded-lg flex gap-4'>
            <FaAmazon className="text-yellow-500 text-3xl" />
            <div>
              <h2 className='font-bold'>Software Engineer, Amazon</h2>
              <p className='text-xs'>Built cloud-based solutions.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Experience