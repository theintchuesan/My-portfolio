import React from 'react'
import SectionWrapper from '../SectionWrapper.jsx'

const Contact = () => {
    return (
        <div className='p-6 w-full text-white   gap-10 md:p-10' id='contact '>

            <div className='w-full h-screen flex-col flex justify-center items-center'>

        {/* TITLE */}
                <div >
                    <SectionWrapper>
                        <h2 className="section-title">Contact <span className=' text-gradient'>Me!</span></h2>
                    </SectionWrapper>
                </div>

        {/* FORM */}
                <div>
                    <form action="post">

                        <div><div className='flex  '>
                            <div className=" flex flex-col gap-4">
                                <div className="  w-60">
                                    <input type="text" id="name" className="bg-[#2a1a4d] border-4 border-amber-600 rounded-md px-4 py-1 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                                </div>
                                <div className=" w-60">
                                    <input type="email" id="email" className="bg-[#2a1a4d] text-white placeholder:text-gray-500 border-4 border-amber-600 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
                                </div>

                            </div>

                            <div className='gap-4 flex flex-col'>
                                <div className=" w-60">
                                    <input type="tel" id="phone" className="bg-[#2a1a4d] text-white placeholder:text-gray-500 border-4 border-amber-600 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" />
                                </div>
                                <div className=" w-60">
                                    <input type="text" id="subject" className="bg-[#2a1a4d] text-white placeholder:text-gray-500 border-4 border-amber-600 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject" />
                                </div>


                            </div>


                        </div></div>


                        <div className="  mt-4">
                            <textarea id="message" rows={5} className="bg-[#2a1a4d] text-white w-115 placeholder:text-gray-500 border-4 border-amber-600 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
                        </div>
                    </form>
                </div>

      {/* BUTTON */}
                <div className='mt-6'>
                    <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer  text-white font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-blue-600 transition duration-300">
                        Send Message
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Contact