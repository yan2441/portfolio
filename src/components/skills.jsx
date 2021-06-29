import React from 'react';
import logos from './svgloader';



const Skills = () => {

  return (

    <section className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24 lg:py-20">
        <div className="grid grid-cols-3 gap-16 text-center lg:grid-cols-6">
          {
            Object.entries(logos).map(([key, value]) => {
              return <div className="flex items-center justify-center ">
                <img src={value} alt={key} className="block object-contain h-10 "></img>
              </div>
            })
          }
        </div>
      </div>
    </section>

  );
}

export default Skills;