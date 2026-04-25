import React from 'react'
import img from '../../assets/mine.jpg'
import { IoArrowForward } from 'react-icons/io5'
import  SectionWrapper  from '../SectionWrapper'

const About = () => {
  return (
    <div id="about" className="w-full text-white mt-10 p-6 md:p-10">

     <div className=' flex-col flex justify-center items-center'>
       <SectionWrapper>
        <h2 className="section-title">About</h2>
      </SectionWrapper>
     </div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 items-center">

        <div className="w-full h-100 md:w-1/2 flex justify-center">
                <img className="w-2/3 md:w-3/4 object-cover border-4 border-amber-600 rounded-full" src={img} alt="" />
              </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2">

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <IoArrowForward /> Backend developer
            </h2>
            <p className='pl-8'>Experienced in scalable APIs.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <IoArrowForward /> AI/ML engineer
            </h2>
            <p className='pl-8' >Model development & deployment.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <IoArrowForward /> Frontend developer
            </h2>
            <p className='pl-8'>Responsive UI development.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About