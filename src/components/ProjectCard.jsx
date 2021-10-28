import React from 'react';
export default function ProjectCard({ item }) {
  return (
    <div className="w-4/5 p-6 mx-auto md:w-1/2">
      <div className="shadow-xl rounded-xl bg-blueGray-50">
        <img className="object-cover object-center w-full lg:h-48 md:h-36 rounded-t-xl" src="https://dummyimage.com/720x400/aaaaaa/8693ac" alt="project" />
        <div className="p-4 lg:p-6 bg-blueGray-50">
          <h2 className="mb-3 text-2xl font-semibold tracking-wide text-black uppercase title-font">{item.name}</h2>
          <h1 className="mx-auto mb-3 font-medium leading-none tracking-tight text-black text-m lg:text-l title-font">{item.describe}</h1>
        </div>
        <div className="px-6 py-2 bg-blue-200 rounded-b-xl">
          <a href="/" className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black " title="github repo"> take a look » </a>
        </div>
      </div>
    </div>
  )
}
