import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Contact = () => {
  return (
    <div id='contact' className='w-full text-white bg-blue-700 py-10 flex flex-col items-center'>

      <h1 className='text-3xl font-bold'>Contact</h1>
      <p className='mt-2'>Feel free to reach out!</p>

      <div className='flex gap-6 mt-6 text-4xl'>
        <FaGithub />
        <FaLinkedin />
        <FcGoogle />
      </div>

    </div>
  )
}

export default Contact