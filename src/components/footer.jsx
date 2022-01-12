import React from 'react';
import SocialMedia from './SocialMedia';

export const Footer = () => {
  return (
    <footer>
      <div class="
          px-5
          py-12
          mx-auto
          max-w-7xl
          sm:px-6
          md:flex md:items-center md:justify-between
          lg:px-20
        ">
        <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
          <SocialMedia size={30} />
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <span class="mt-2 text-sm font-light text-gray-500"> Copyright © 2021 By<a href="https://wickedlabs.dev" class="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@Yan2441</a>. Made with ❤ </span>
        </div>
      </div>
    </footer>
  )
}
