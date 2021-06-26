import React from 'react';

const AboutMe = () => {
  const logo = process.env.PUBLIC_URL + '/logo512.png'
  return (
    <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-4 lg:items-center">
          <div className="lg:col-start-2 lg:max-w-2xl ml-auto mr-auto">
            <h2 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              Yassine Najem
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              Front-end / React developer
            </p>

          </div>
          <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center lg:justify-start space-x-4">
                <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={logo} alt="1" />
                <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src={logo} alt="2" />
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src={logo} alt="3" />
                <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={logo} alt="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;