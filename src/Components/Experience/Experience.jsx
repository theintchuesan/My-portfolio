import React from 'react'
// Frontend
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'

// Backend / Languages
import { FaNodeJs, FaJava, FaDocker, FaGithub } from 'react-icons/fa'
import { SiExpress, SiDotnet, SiC, SiKotlin } from 'react-icons/si'
// Databases
import { SiMysql, SiPostgresql, SiMongodb, SiSqlite } from 'react-icons/si'

// AI / ML
import { SiTensorflow, SiPytorch } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

// Tools / Others
import { SiAndroidstudio } from 'react-icons/si'
import { SiNetflix } from 'react-icons/si'
import { FaAmazon } from 'react-icons/fa'

const Experience = () => {
    return (
        <div id='experience' className='w-full flex m-10 text-white flex-col items-start gap-10 overflow-hidden'>
            <div>
                <h1 className='text-3xl font-bold '>Experience</h1>
            </div>
            <div className='m-10 flex flex-wrap gap-10 items-start'>
                <div className="flex w-2/5 flex-wrap gap-6 text-5xl  mt-6">
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
                    <FaGithub className="text-white" />

                    <SiAndroidstudio className="text-green-400" />
                </div>
                <div className='flex flex-col gap-10'>
                       <div className='bg-[#171d45] w-full flex rounded-lg'>
                         <div className='p-4' >
                                  <FcGoogle className="text-3xl" />
                         </div>
                         <div>
                                    <h2 className='text-md font-bold'>Software Engineer,Google</h2>
                                    <h5>2020 - Present</h5>

                                    <p className='text-xs'>Worked on developing and maintaining web applications using React and Node.js.</p>
                         </div>
                       
                       </div>
                        <div className='bg-[#171d45] w-full flex rounded-lg'>
                         <div className='p-4' >
                                  <SiNetflix className="text-red-600 text-3xl" />
                         </div>
                         <div>
                                    <h2 className='text-md font-bold'>Software Engineer,Netflix</h2>
                                    <h5>2020 - Present</h5>

                                    <p className='text-xs'>Worked on developing and maintaining web applications using React and Node.js.</p>
                         </div>
                       </div>
                        <div className='bg-[#171d45] w-full flex rounded-lg'>
                         <div className='p-4' >
                                  <FaAmazon className="text-yellow-500  text-3xl" />
                         </div>
                         <div>
                                    <h2 className='text-md font-bold'>Software Engineer,Amazon</h2>
                                    <h5>2020 - Present</h5>

                                    <p className='text-xs'>Worked on developing and maintaining web applications using React and Node.js.</p>
                         </div>
                       </div>   
                </div>
            </div>
        </div>
    )
}

export default Experience