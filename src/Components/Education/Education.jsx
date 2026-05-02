import SectionWrapper from "../SectionWrapper";

const Education = () => {
  const education = [
    { year: "2008 - 2018", title: "High School", desc: "High school diploma" },
    { year: "2019 - 2021", title: "Bachelor", desc: "Industrial Chemical Engineering" },
    { year: "2022 - 2027", title: "Bachelor", desc: "Computer Engineering" },
  ];

  return (
    <div className="text-white ">

      <div className="p-6 justify-center items-center flex">
        <SectionWrapper>
          <h2 className="section-title">Education</h2>
        </SectionWrapper>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative p-10 sm:left-4 ">

        
       

        <div className="space-y-10 ">
<div className="absolute left-14 top-10  sm:left-14 bottom-0 w-[2px] bg-fuchsia-200"></div>
          {education.map((edu, index) => (
            <div key={index} className="relative pl-12 sm:pl-12">


              {/* DOT (centered on line) */}
              <div className="absolute left-4 top-0 w-4 h-4  sm:left-4  -translate-x-1/2 bg-fuchsia-200 rounded-full border-2 border-white"></div>

              {/* CARD */}
              <div className="border-4 border-fuchsia-200 p-4 rounded-lg max-w-md w-full">
               <p className="text-gray-400 text-sm">{edu.year}</p> 
                <h2 className="text-lg">{edu.title}</h2>
                
                <p className="text-gray-400 text-sm">{edu.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Education;



{/* <div className='p-10 '>
            {education.map((edu, index) => (
                <div key={index} className="mb-4 border-4 border-teal-600 p-4 rounded-lg w-120">
                    <h2 className='text-lg '>{edu.title}</h2>
                    <p className='text-gray-400 text-sm'>{edu.desc}</p>
                </div>
            ))}
        </div> */}