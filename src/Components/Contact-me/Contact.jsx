import React,{useState} from 'react'
import SectionWrapper from '../SectionWrapper.jsx'
import emailjs from '@emailjs/browser';

// import dotenv from 'dotenv';

// dotenv.config();
// const SERVICE_ID = dotenv.EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = dotenv.EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = dotenv.EMAILJS_PUBLIC_KEY;






const Contact = () => {


const[formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:''

})

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
}

    const sendEmail = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_t1o5j9q',
    'template_mn6dn1o',
    formData,
    'QymW9aJi3BNjPnTN3'
  )
  .then(() => {

    alert("Message sent successfully!");
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send message");
  });
};
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
                <div className='p-4 sm:left-14  md:p-8 '>
                    <form action="post"  onSubmit={sendEmail}>

                        <div><div className='flex  gap-4 '>
                            <div className=" flex flex-col gap-4">
                                <div className="  ">
                                    <input 
                                           type="text" 
                                           name='name'
                                           value = {formData.name}
                                           onChange={handleChange}
                                    className="w-full bg-[#2a1a4d] border-4 border-fuchsia-200 rounded-md px-4 py-1 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                                </div>
                                <div className=" w-60">
                                    <input type="email" name='email' value = {formData.email}
                                           onChange={handleChange} className="w-full  bg-[#2a1a4d] text-white placeholder:text-gray-500 border-4 border-fuchsia-200 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
                                </div>

                            </div>

                            <div className='gap-4 flex flex-col'>
                                <div className=" w-60">
                                    <input type="tel" value = {formData.phone}
                                           onChange={handleChange} name='phone' className="w-full  bg-[#2a1a4d] text-white placeholder:text-gray-500 border-4 border-fuchsia-200 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" />
                                </div>
                                <div className=" w-60">
                                    <input type="text"  name='subject' value = {formData.subject}
                                           onChange={handleChange} className="w-full  bg-[#2a1a4d] text-white placeholder:text-gray-500 border-4 border-fuchsia-200 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject" />
                                </div>


                            </div>


                        </div></div>


                        <div className="  mt-4">
                            <textarea name='message' value = {formData.message}
                                           onChange={handleChange} rows={5} className=" w-full bg-[#2a1a4d] text-white placeholder:text-gray-500 border-4 border-fuchsia-200 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
                        </div>
                         <div className='mt-6'>
                    <button type="submit"  className="bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer  text-white font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </div>
                    </form>
                </div>

      {/* BUTTON */}
               
            </div>
        </div>

    )
}

export default Contact