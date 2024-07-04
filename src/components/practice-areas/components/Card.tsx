import React from "react";
import { motion } from "framer-motion";
import { PracticeAreaProps } from "../../../utils/constants";

type CardProps = {
  card: PracticeAreaProps;
  cardIdx: number;
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
  "1": "col-span-1",
  "2": "col-span-2",
};

const rowSpanClasses: RowSpanClasses = {
  "1": "row-span-1",
  "2": "row-span-2",
  "3": "row-span-3",
  "4": "row-span-4",
};

const Card: React.FC<CardProps> = ({
  card,
  cardIdx,
  setSelectedArea,
  setInView,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: cardIdx * 0.1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => {
        setSelectedArea(card);
        setInView(true);
      }}
      className={`bg-cover bg-center cursor-pointer ${
        colSpanClasses[card.colSpan]
      } ${rowSpanClasses[card.rowSpan]}`}
      style={{ backgroundImage: `url(${card.imageUrl})` }}
    >
      <div className="p-4 flex justify-center items-center h-full w-full bg-opacity-50 bg-black">
        <span className="text-white font-lato font-semibold text-lg text-center">
          {card.label}
        </span>
      </div>
    </motion.article>
  );
};

export default Card;
