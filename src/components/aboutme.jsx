import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import logo from '../assets/developer.gif'

const AboutMe = () => {

  return (
    <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20 ">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-4 lg:items-center">
          <div className="ml-auto mr-auto lg:col-start-2 lg:max-w-2xl">
            <h2 className="my-8 text-4xl font-extrabold leading-8 text-gray-900 sm:text-6xl sm:leading-9">
              YASSINE NAJEM
            </h2>
            <TypewriterComponent
              options={{
                wrapperClassName: "my-4 text-3xl leading-6 text-gray-500 dark:text-gray-300",
                cursorClassName: "text-3xl text-gray-500",
                strings: ['Front-end developer', 'React.Js developer', 'mobile developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="relative mt-20 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-start justify-center ml-20 space-x-4 lg:justify-start">
                <img className=" md:w-96" width="400" src={logo} alt="main avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;