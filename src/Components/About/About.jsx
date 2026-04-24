import React from 'react'
import img from '../../assets/gg.jpg'
import { IoArrowForward } from 'react-icons/io5'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="about" className="w-full text-white mt-10 p-6 md:p-10">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">About Me</h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 items-center">

        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-60 rounded-lg" src={img} alt="Profile" />
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2">

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <IoArrowForward /> Backend developer
            </h2>
            <p>Experienced in scalable APIs.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <IoArrowForward /> AI/ML engineer
            </h2>
            <p>Model development & deployment.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <IoArrowForward /> Frontend developer
            </h2>
            <p>Responsive UI development.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About