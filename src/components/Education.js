import React from 'react'

function Education() {
    const data=[{
        id:1,
        education:"Class X",
        school:"Shree DurgaParameshwari High School, Mangalore",
        percentage:"81.44 %"
    },
        {
            id: 2,
            education: "Pre University Collage",
            school: "Pompei Pre Univeristy Collage, Mangalore",
            percentage: "85.65 %"
        },
        {
            id: 3,
            education: "Bachelor's of Engineering",
            school: "Shree Devi Institute of Technology, Mangalore",
            percentage: "8.19 CGPA"
        },
        {
            id: 4,
            education: "Java Full Stack Development Course",
            school: "Pentagon Space, Bangalore",
            percentage: ""
        }]
  return (
      <div name="Education" className='py-16 lg:px-20 mx-auto bg-gradient-to-t from-black to-gray-800 text-white flex flex-col w-full h-max justify-center '>
        <h2 className='text-4xl font-bold underline lg:px-16 px-6 py-6'>Education</h2>
        
          <div className='flex flex-col-reverse gap-4 lg:px-16 sm:px-6 md:px-8 px-4'>
              {
                  data.map((item) => {
                      return (
                        <div >
                          <div key={item.id} className='px-10 py-6 bg-gray-900 text-white rounded-md hover:scale-105 duration-300 space-y-1'>
                              <h2 className='text-2xl font-bold'>{item.education}</h2>
                              <h2 className='text-xl font-semibold'>{item.school}</h2>
                              <h2 className='font-semibold'>{item.percentage}</h2>
                          </div>
                          </div>
                      )
                  })
              }
        </div>
    </div>
  )
}

export default Education