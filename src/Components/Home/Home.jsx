import React from 'react'
import img from '../../assets/gg.jpg'

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full items-center p-6 md:p-20 gap-10">

      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-6xl font-bold">
          hello i am frontend developer
        </h1>

        <p className="text-sm md:text-2xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button className="mt-5 py-2 px-4 rounded-3xl bg-[#465697] hover:scale-105 duration-300">
          Contact Me
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-2/3 md:w-3/4 object-cover" src={img} alt="" />
      </div>

    </div>
  )
}

export default Home