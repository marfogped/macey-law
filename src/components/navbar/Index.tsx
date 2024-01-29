import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../../utils/constants';
import { MaceyLogoTransparent } from '../../utils/images';
import { ScrollTo } from '..';
import { Scale } from "lucide-react"
import useWindowDimensions from '../../utils/useWindowDimentions';
import "./Navbar.css"

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
    } else if(window.scrollY <= innerHeight){
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
    <nav 
    className={`fixed top-0 w-full ${isActive ? 'h-max' : ''} z-10`}
    >
      <div className={`xl:w-[80%] mx-auto xs:w-full sm:w-full flex items-center justify-between xs:p-4 sm:p-4 md:px-0 ${color ? 'xs:bg-neutral sm:bg-neutral md:bg-transparent' : 'bg-transparent'}`}>

        <div>
          <img 
          src={MaceyLogoTransparent} 
          alt="macey-logo"
          className='h-14'
          />
        </div>

        <ul className='xs:hidden sm:hidden md:flex gap-4'>
          {
            NAV_ITEMS.map((label) => (
              <li 
              key={label.id}
              onClick={()=> {
                openNav()
              }}
              className={`${color ? 'text-black/80 hover:text-black' : 'text-neutral/80 hover:text-neutral'} text-lg font-lato font-semibold cursor-pointer`}
              >
                <ScrollTo id={`${label.id}`}>{ label.label }</ScrollTo>
              </li>
            ))
          }
        </ul>

        <div className={`xs:flex sm:flex md:hidden font-raleway font-bold text-2xl ${color ? 'text-black' : 'text-neutral'}`}>
          <Scale className={`${color ? 'text-black' : 'text-neutral'} `} size={32} />
        </div>
      
        <div className=''>
          <div className='xs:hidden sm:hidden md:flex items-center'>
            <p className={`text-lg font-lato font-semibold pr-4 ${color ? 'text-black' : 'text-neutral'}`}>+1 305-860-2562</p>
            <button className='text-neutral text-lg font-lato font-semibold bg-[#1C3C7B] px-4 py-2'>FREE CONSULTATION</button>
          </div>

          <div className="menu-toggle xs:flex sm:flex md:hidden">
            <div
              onClick={openNav}
              id="menu-toggle-btn"
              className={isActive ? "active" : ""}
            >
              <span className={color ? "black" : "white"}></span>
            </div>
          </div>
        </div>


      </div>
      {
        windowWidth < 768 ? (
          <nav className={`${isActive ? 'visible' : 'invisible pointer-events-none'} w-full flex justify-center`}>
              <ul className='flex flex-col bg-neutral w-full items-center py-8 scroll-smooth'>
                {
                  NAV_ITEMS.map((label) => (
                    <li 
                    key={label.id}
                    onClick={()=> {
                      openNav()
                    }}
                    className={`text-black/80 hover:text-black font-lato font-semibold`}
                    >
                      <ScrollTo id={`${label.id}`}>{ label.label }</ScrollTo>
                    </li>
                  ))
                }
              </ul>
          </nav>
        ) : ('')
      }
    </nav>
  )
}

export default Index