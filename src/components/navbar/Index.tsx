import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../utils/constants";
import { MaceyLogoTransparent } from "../../utils/images";
import { ScrollTo } from "..";
import useWindowDimensions from "../../utils/useWindowDimentions";
import "./Navbar.css";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState<boolean>(false);
  const { windowWidth } = useWindowDimensions();

  const openNav = () => {
    setIsActive(!isActive);
  };

  const changeColor = () => {
    const innerHeight = window.innerHeight;
    if (window.scrollY >= innerHeight) {
      setColor(true);
    } else if (window.scrollY <= innerHeight) {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full ${isActive ? "h-max" : ""} z-10 ${
        color ? "xs:bg-none sm:bg-none md:bg-neutral" : "bg-transparent"
      }`}
    >
      <nav
        className={`xl:w-[80%] mx-auto xs:w-full sm:w-full flex items-center justify-between p-4 transition-all ${
          color
            ? "xs:bg-neutral sm:bg-neutral md:bg-transparent"
            : `bg-transparent ${
                isActive ? "xs:bg-neutral sm:bg-neutral md:bg-transparent" : ""
              }`
        }`}
      >
        <div>
          <ScrollTo id="hero">
            <img
              src={MaceyLogoTransparent}
              alt="macey-logo"
              className="h-14 aspect-square"
            />
          </ScrollTo>
        </div>

        <ul className="xs:hidden sm:hidden md:flex gap-4">
          {NAV_ITEMS.map((label) => (
            <li
              key={label.id}
              onClick={() => {
                openNav();
              }}
              className={`${
                color
                  ? "text-black/80 hover:text-black"
                  : "text-neutral/80 hover:text-neutral"
              } text-lg font-lato font-semibold cursor-pointer`}
            >
              <ScrollTo id={`${label.id}`}>{label.label}</ScrollTo>
            </li>
          ))}
        </ul>

        <div
          className={`xs:flex sm:flex md:hidden font-raleway font-bold text-2xl mix-blend-difference text-neutral`}
        >
          MACEY LAW
        </div>

        <div className="">
          <div className="xs:hidden sm:hidden md:flex items-center">
            <p
              className={`text-lg font-lato w-full font-semibold md:hidden lg:flex pr-4 ${
                color ? "text-black" : "text-neutral"
              }`}
            >
              +1 305-860-2562
            </p>
            <ScrollTo id={`contact`}>
              <button className="text-neutral md:text-sm xl:text-md xxl:text-lg font-lato font-semibold bg-[#1C3C7B] px-4 py-2">
                FREE CONSULTATION
              </button>
            </ScrollTo>
          </div>

          <div className="menu-toggle xs:flex sm:flex md:hidden">
            <div
              onClick={openNav}
              id="menu-toggle-btn"
              className={isActive ? "active" : ""}
            >
              <span
                className={color ? `black` : `${isActive ? "black" : "white"}`}
              ></span>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`${isActive && windowWidth < 768 ? "" : "hidden"} ${
          windowWidth > 768 && "hidden"
        } w-full flex justify-center transition-all`}
      >
        <ul className="flex flex-col gap-2 bg-neutral w-full items-center py-8 scroll-smooth">
          {NAV_ITEMS.map((label) => (
            <li
              key={label.id}
              onClick={() => {
                openNav();
              }}
              className={`text-black/80 hover:text-black font-lato font-semibold text-2xl`}
            >
              <ScrollTo id={`${label.id}`}>{label.label}</ScrollTo>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Index;
