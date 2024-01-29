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

      <div className='bg-[#1C3C7B] py-4 xs:px-4 sm:px-4 md:px-0'>
        <div className='h-max flex xs:flex-col-reverse sm:flex-col-reverse lg:flex-row items-center justify-between section-container xs:gap-8 sm:gap-8 md:gap-4 '>
          <div className='text-neutral'>© 2024 All Rights Reserved.</div>

          <ul className='flex xs:flex-col sm:flex-col md:flex-row gap-4'>
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

          <ul className='flex xs:flex-col sm:flex-col md:flex-row gap-4'>
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