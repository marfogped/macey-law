import React from 'react';
import { MaceyFullWhite } from '../../utils/images';
import { NAV_ITEMS, FOOTER_LINKS } from '../../utils/constants';
import { ScrollTo } from '..';

const Index: React.FC = () => {
  return (
    <footer className='h-max w-full'>
      <div className='w-full h-full flex items-center justify-center mt-6 mb-16'>
        <img src={MaceyFullWhite} alt="macey-full-logo" className='h-64' />
      </div>

      <div className='bg-[#1C3C7B] py-4'>
        <div className='h-max flex xs:flex-col sm:flex-col lg:flex-row items-center justify-between section-container gap-4'>
          <div className='text-neutral'>© 2024 All Rights Reserved.</div>

          <ul className='flex gap-4'>
          {
              NAV_ITEMS.map((label) => (
                <li 
                key={label.id}
                className={`text-neutral text-lg font-lato cursor-pointer`}
                >
                  <ScrollTo id={`${label.id}`}>{ label.label }</ScrollTo>
                </li>
              ))
            }
          </ul>

          <ul className='flex gap-4'>
            {
              FOOTER_LINKS.map((label) => (
                <li 
                key={label.id}
                className='text-neutral underline cursor-pointer'
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