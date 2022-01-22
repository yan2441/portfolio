import React, { useState } from 'react';
import SocialMedia from './SocialMedia';


const NavBar = () => {
  const [menuButton, setMenuButton] = useState(true)
  return (
    <div className='relative'>
      <nav className="bg-white shadow dark:bg-gray-800 sticky">
        <div className="container px-6 py-4 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">

              <div className="text-xl font-semibold text-gray-700">
                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-500 dark:hover:text-gray-300" href="/">YassDEV</a>
              </div>

              <div className="flex md:hidden" onClick={() => menuButton ? setMenuButton(false) : setMenuButton(true)}>
                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div /* className="flex-1 md:flex md:items-center md:justify-between" */ className={` items-center md:flex ${menuButton ? "hidden" : ""}`}>
              <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                <a href="/" className="px-5 py-2 mx-2 mt-2 text-lg font-medium text-gray-700 transition-colors duration-200 transform rounded-2xl md:mt-0 hover:bg-gray-300">About me</a>
                <a href="/" className="px-5 py-2 mx-2 mt-2 text-lg font-medium text-gray-700 transition-colors duration-200 transform rounded-2xl md:mt-0 hover:bg-gray-300">Projects</a>
                <a href="/" className="px-5 py-2 mx-2 mt-2 text-lg font-medium text-gray-700 transition-colors duration-200 transform rounded-2xl md:mt-0 hover:bg-gray-200">Contact</a>
                <a href="https://drive.google.com/file/d/1RvWwi6ixctRVlBIn3c68-grdWzI65WyQ/view" target='_blank' rel='noreferrer' className="px-5 py-2 mx-2 mt-2 mb-4 md:mb-0 text-lg text-white font-medium transition-colors duration-200 transform rounded-2xl md:mt-0 bg-blue-700 hover:bg-blue-300 hover:text-gray-700">Resume</a>
              </div>
              <SocialMedia size={30} />

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;