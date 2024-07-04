import React from "react";
import { MaceyFullWhite } from "../../utils/images";
import { NAV_ITEMS, FOOTER_LINKS } from "../../utils/constants";
import { ScrollTo } from "..";

const Index: React.FC = () => {
  return (
    <footer className="h-max w-full">
      <div className="xs:w-[90%] sm:w-[90%] lg:w-full mx-auto h-full flex items-center justify-center xs:my-16 sm:my-16 md:mt-6">
        <img
          src={MaceyFullWhite}
          alt="macey-full-logo"
          className="h-64 w-auto"
        />
      </div>

      <div className="bg-[#1C3C7B] md:py-4">
        <div className="h-max flex xs:flex-col sm:flex-col xl:flex-row md:w-[90%] xxl:w-[80%] mx-auto items-center justify-between md:gap-4 ">
          <div className="text-neutral xs:w-full sm:w-max text-center xs:order-3 sm:order-3 xl:order-1 xs:py-2 sm:py-2 md:py-0 xs:bg-[rgb(24,25,26)] md:bg-none">
            © 2024 All Rights Reserved.
          </div>

          <ul className="xs:w-full sm:w-max flex xs:flex-col sm:flex-col md:flex-row gap-4 xs:order-1 sm:order-1 xl:order-2 xs:py-2 sm:py-2 md:py-0">
            {NAV_ITEMS.map((label) => (
              <li
                key={label.id}
                className={`text-neutral text-center text-lg font-lato cursor-pointer`}
              >
                <ScrollTo id={`${label.id}`}>{label.label}</ScrollTo>
              </li>
            ))}
          </ul>

          <ul className="xs:w-full sm:w-max flex xs:flex-col sm:flex-col md:flex-row  gap-4 xs:order-2 sm:order-2 xl:order-3 xs:py-2 sm:py-2 md:py-0 xs:bg-[#0F0F1C] md:bg-none">
            {FOOTER_LINKS.map((label) => (
              <li
                key={label.id}
                className="text-neutral text-center underline cursor-pointer"
              >
                {label.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Index;
