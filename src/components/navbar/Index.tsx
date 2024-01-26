import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../../utils/constants';
import { MaceyLogoTransparent } from '../../utils/images';
import "./Navbar.css"

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState<boolean>(false);

  const openNav = () => {
    setIsActive(!isActive);
  };

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    }
    if (window.scrollY === 0) {
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
      <div className={`xl:w-[70%] xs:w-full sm:w-full flex items-center justify-between p-4 ${color ? 'bg-neutral' : 'bg-transparent'}`}>

        <div>
          <img 
          src={MaceyLogoTransparent} 
          alt="macey-logo"
          className='h-14'
          />
        </div>

        <ul className='xs:hidden sm:hidden md:flex'>
          {
            NAV_ITEMS.map((label) => (
              <li 
              key={label.id}
              >
                { label.label }
              </li>
            ))
          }
        </ul>
      
        <div className=''>
          <div className='xs:hidden sm:hidden md:flex'>
            <p>+1 305-860-2562</p>
            <button>FREE CONSULTATION</button>
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
      <nav className={`${isActive ? 'visible' : 'invisible pointer-events-none'} w-full flex justify-center`}>
          <ul className='flex flex-col bg-neutral w-full items-center py-8'>
            {
              NAV_ITEMS.map((label) => (
                <li 
                key={label.id}
                className='font-lato text-lg cursor-pointer text-black/70 hover:text-black my-2'
                >
                  { label.label }
                </li>
              ))
            }
          </ul>
      </nav>
    </nav>
  )
}

export default Index