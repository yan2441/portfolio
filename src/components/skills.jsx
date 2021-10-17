import React from 'react';
import logos from './svgloader';



const Skills = () => {

  return (

    <section className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24 lg:py-20">
        <div className="flex items-center justify-center ">
          <h3 className="m-10 mb-16 text-2xl font-bold text-blue-600">Technologies and skills</h3>
        </div>
        <div className="grid grid-cols-2 gap-16 text-center lg:grid-cols-8">
          {
            Object.entries(logos).map(([key, value]) => {
              return <div className="flex items-center justify-center ">
                <img src={value} key={key} alt={key} className="block object-contain h-16 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "></img>
              </div>
            })
          }
        </div>
      </div>
    </section>

  );
}

export default Skills;