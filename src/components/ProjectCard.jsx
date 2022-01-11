import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
export default function ProjectCard({ item }) {
  const { images } = item;
  return (
    <div className="w-[80%] p-6 mx-auto md:w-1/2">
      <div className="shadow-xl rounded-xl bg-blueGray-50">
        <div className="object-cover object-center w-[30%] md:h-auto rounded-t-xl">
          <SimpleImageSlider
            style={{ margin: 0, padding: 0 }}
            width={500}
            height={320}
            images={images}
            showNavs={true}
            navSize={40}
            slideDuration={3}
            loop={true}
            navStyle={1}
            autoPlay={true}
            autoPlayDelay={Math.floor(Math.random() * (15 - 2) + 2)}
          />

        </div>
        <div className="p-4 lg:p-6 bg-blueGray-50">
          <h2 className="mb-3 text-2xl font-semibold tracking-wide text-black uppercase title-font">{item.name}</h2>
          <h1 className="mx-auto mb-3 font-medium leading-none tracking-tight text-black text-m lg:text-l title-font">{item.describe}</h1>
        </div>
        <div className="px-6 py-2 bg-gray-200 rounded-b-xl">
          <a href="/" className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black " title="github repo"> take a look » </a>
        </div>
      </div>
    </div>
  )
}




