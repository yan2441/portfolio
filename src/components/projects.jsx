import React from 'react';

const Projects = () => {
  return (
    <div className="text-blueGray-700 ">
      <div className="container items-center px-5 py-8 mx-auto lg:px-24">
        <h2 className="text-2xl font-bold text-blue-600">Projects</h2>
        {/* cards container */}
        <div className="flex flex-wrap mb-12 text-left">
          {/* project card */}
          <div className="w-full p-6 mx-auto lg:w-1/3">
            <div className="shadow-xl rounded-xl bg-blueGray-50">
              <img className="object-cover object-center w-full lg:h-48 md:h-36 rounded-t-xl" src="https://dummyimage.com/720x400/F3F4F7/8693ac" alt="project" />
              <div className="p-4 lg:p-6 bg-blueGray-50">
                <h2 className="mb-3 font-semibold tracking-widest text-black uppercase text-l title-font">movies database</h2>
                <h1 className="mx-auto mb-4 font-semibold leading-none tracking-tighter text-black text-m lg:text-3xl title-font">node js / react / JWT </h1>
              </div>
              <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                <a href="/" className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black " title="github repo"> take a look » </a>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="w-full p-6 mx-auto lg:w-1/3">
            <div className="shadow-xl rounded-xl bg-blueGray-50">
              <img className="object-cover object-center w-full lg:h-48 md:h-36 rounded-t-xl" src="https://dummyimage.com/720x400/F3F4F7/8693ac" alt="project" />
              <div className="p-4 lg:p-6 bg-blueGray-50">
                <h2 className="mb-3 font-semibold tracking-widest text-black uppercase text-l title-font">movies database</h2>
                <h1 className="mx-auto mb-4 font-semibold leading-none tracking-tighter text-black text-m lg:text-3xl title-font">node js / react / JWT </h1>
              </div>
              <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                <a href="/" className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black " title="github repo"> take a look » </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;