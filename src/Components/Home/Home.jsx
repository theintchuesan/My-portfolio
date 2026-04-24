import React from 'react'
import img from '../../assets/gg.jpg'

const Home = () => {
  return (
    
    <div className="text-white flex w-full items-start p-10 md:p-20">
  
  {/* LEFT */}
  <div className="w-1/2 md:pt-10">
    <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
      hello i am frontend developer
    </h1>

    <p className="text-sm md:text-2xl tracking-tight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>

    <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
      Contact Me
    </button>
  </div>

  {/* RIGHT */}
  <div className="w-1/2 flex justify-end">
    <img className="w-3/4 object-cover" src={img} alt="" />
  </div>

</div>
  );
  
}

export default Home
