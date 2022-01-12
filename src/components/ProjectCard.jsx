import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function ProjectCard({ item }) {
  const { images } = item;

  return (
    <div className="w-[80%] p-6 mx-auto lg:w-1/2">
      <div className="shadow-xl rounded-sm bg-blueGray-50">
        <div className="object-cover object-center w-[90%] md:h-auto rounded-t-xl">
          <Carousel autoPlay={true} transitionTime={'1000'} showThumbs={false} infiniteLoop={true} stopOnHover={true} showIndicators={false} showStatus={false}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="p-4 lg:p-6 bg-blueGray-50">
          <h2 className="mb-3 text-2xl font-semibold tracking-wide text-black uppercase title-font">{item.name}</h2>
          <h1 className="mx-auto mb-3 font-medium leading-none tracking-tight text-black text-m lg:text-l title-font">{item.describe}</h1>
        </div>
        <div className="px-6 py-2 bg-gray-200 rounded-b-sm">
          <a href={item.link} target={'_blank'} rel='noreferrer' className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black " title="github repo"> take a look » </a>
        </div>
      </div>
    </div>
  )
}




