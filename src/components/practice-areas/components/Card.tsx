import React from 'react'
import { PracticeAreaProps } from '../../../utils/constants';

type CardProps = {
    card: PracticeAreaProps;
  };

const Card: React.FC<CardProps> = ({ card }) => {

    const colSpanClasses = {
        1: 'col-span-1',
        2: 'col-span-2',
      };
    
      const rowSpanClasses = {
        1: 'row-span-1',
        2: 'row-span-2',
      };

    return (
        <article
        className={`bg-cover bg-center cursor-pointer ${colSpanClasses[card.colSpan]} ${rowSpanClasses[card.rowSpan]}`}
        style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
            <div className="p-4 flex justify-center items-center h-full w-full bg-opacity-50 bg-black">
                <span className="text-white font-lato font-semibold text-lg text-center">{card.label}</span>
            </div>
        </article>
    )
}

export default Card