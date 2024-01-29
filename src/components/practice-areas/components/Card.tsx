import React from 'react'
import { PracticeAreaProps } from '../../../utils/constants';

type CardProps = {
    card: PracticeAreaProps;
    setSelectedArea: (values: PracticeAreaProps) => void;
    setInView: (values: boolean) => void;
};

type ColSpanClasses = {
    [key: string]: string;
  };
  
  type RowSpanClasses = {
    [key: string]: string;
  };
  
  const colSpanClasses: ColSpanClasses = {
    '1': 'col-span-1',
    '2': 'col-span-2',
    // Añadir más si es necesario
  };
  
  const rowSpanClasses: RowSpanClasses = {
    '1': 'row-span-1',
    '2': 'row-span-2',
    // Añadir más si es necesario
  };

const Card: React.FC<CardProps> = ({ card, setSelectedArea, setInView }) => {
    return (
        <article
        onClick={()=>{
          setSelectedArea(card);
          setInView(true);
        }}
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