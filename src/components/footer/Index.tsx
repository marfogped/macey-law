import React from 'react';
import { MaceyFullWhite } from '../../utils/images';
import { NAV_ITEMS, FOOTER_LINKS } from '../../utils/constants';
import { ScrollTo } from '..';

const Index: React.FC = () => {
  return (
    <footer className='h-max w-full'>
      <div className='xs:w-[90%] sm:w-[90%] lg:w-full mx-auto h-full flex items-center justify-center xs:my-16 sm:my-16 md:mt-6'>
        <img src={MaceyFullWhite} alt="macey-full-logo" className='h-64 w-auto' />
      </div>

      <div className='bg-[#1C3C7B] md:py-4'>
        <div className='h-max grid grid-cols-1 lg:grid-cols-3 items-center justify-between md:gap-4 '>
          <div className='text-neutral xs:order-3 sm:order-3 lg:order-1 xs:py-2 sm:py-2 md:py-0 xs:bg-[rgb(24,25,26)] sm:bg-none text-center'>© 2024 All Rights Reserved.</div>

          <ul className='flex xs:flex-col sm:flex-col md:flex-row gap-4 xs:order-1 sm:order-1 lg:order-2 xs:py-2 sm:py-2 md:py-0'>
            {
              NAV_ITEMS.map((label) => (
                <li 
                key={label.id}
                className={`text-neutral text-center text-lg font-lato cursor-pointer`}
                >
                  <ScrollTo id={`${label.id}`}>{ label.label }</ScrollTo>
                </li>
              ))
            }
          </ul>

          <ul className='flex xs:flex-col sm:flex-col md:flex-row  gap-4 xs:order-2 sm:order-2 lg:order-3 xs:py-2 sm:py-2 md:py-0 xs:bg-[#0F0F1C] sm:bg-none'>
            {
              FOOTER_LINKS.map((label) => (
                <li 
                key={label.id}
                className='text-neutral text-center underline cursor-pointer'
                >
                  { label.label }
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Index