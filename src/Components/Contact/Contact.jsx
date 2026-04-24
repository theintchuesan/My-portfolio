import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full text-white bg-blue-700'>
        
            <div className='w-1/2 '>
                <h1 className='text-3xl font-bold text-center py-10'>Contact</h1>
                <h3 className='text-lg text-center py-2'>Feel free to reach out to me!</h3>
            </div>
            <div className='w-1/2 flex justify-center items-center py-10'>
                <a href="https://github.com/theintchuesan" target="_blank" rel="noopener noreferrer" className='mx-4 text-4xl hover:text-blue-500 transition-colors duration-300'>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/theint-chue-san-%D8%B5%D9%88%D9%81%D9%8A%D8%A7-430b7531b/" target="_blank" rel="noopener noreferrer" className='mx-4 text-4xl hover:text-blue-500 transition-colors duration-300'>
                    <FaLinkedin />
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer" className='mx-4 text-4xl hover:text-blue-500 transition-colors duration-300'>
                    <FcGoogle />
                </a>
            </div>
    </div>
    
  )
}

export default Contact