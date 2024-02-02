import React, { 
  // useEffect, 
  // useRef 
} from 'react';
// import Map from "@arcgis/core/Map";
// import MapView from "@arcgis/core/views/MapView";
// import Graphic from "@arcgis/core/Graphic";
// import Point from "@arcgis/core/geometry/Point";
// import esriConfig from "@arcgis/core/config";
import "@arcgis/core/assets/esri/themes/light/main.css";
import useWindowDimensions from '../../utils/useWindowDimentions';
import { MapPin, Phone, Mail, NotebookTabs } from 'lucide-react';
import { MaceyMap } from '../../utils/images';
import "./Contact.css"

const Index: React.FC = () => {
  const { windowWidth } = useWindowDimensions();
  // const mapDiv = useRef(null);
  
  // useEffect(() => {
  //   const position = [25.731, -80.257];
  //   const apiKey = import.meta.env.VITE_ARCGIS_API_KEY;
  //   esriConfig.apiKey = apiKey;

  //   if(mapDiv && mapDiv.current){

  //     const map = new Map({
  //       basemap: "arcgis/navigation", 
  //     });
  
  //     const view = new MapView({
  //       container: mapDiv.current,
  //       map: map,
  //       center: position,
  //       zoom: 17 
  //     });
  
      
  //     const point = new Point({
  //       longitude: position[1],
  //       latitude: position[0]
  //     });
  
      
  //     const simpleMarkerSymbol = {
  //       type: "simple-marker",
  //       color: [226, 119, 40], 
  //       outline: {
  //         color: [255, 255, 255], 
  //         width: 1
  //       }
  //     };
  
      
  //     const pointGraphic = new Graphic({
  //       geometry: point,
  //       symbol: simpleMarkerSymbol
  //     });
  
      
  //     view.graphics.add(pointGraphic);
  //   }

  // }, []);

  return (
    <>
      <section className='w-full h-max bg-[#0F0F1C] py-12' id='contact'>
        <h2 className='section-title text-center text-neutral mb-8'>Find Us</h2>
        <div className='mx-auto h-full w-full flex items-center'>
          <div className='h-[70%] w-full mx-auto flex items-center xs:flex-col sm:flex-col md:flex-row '>
            <div className='grid grid-cols-2 xs:w-full sm:w-full md:w-1/2 p-4 place-items-center xs:place-content-start sm:place-content-start xs:gap-5 sm:gap-5 md:gap-6'> 
              
              <div className='flex flex-col items-center justify-start font-lato'>
                <div className='border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full'>
                  <NotebookTabs size={windowWidth > 768 ? 42 : 28} className='text-neutral' />
                </div>
                <p className='font-semibold text-neutral'>Contact Us</p>
                <p className='text-center text-balance text-neutral/80'>If you're facing legal challenges, don't hesitate to reach out to us for expert guidance and support.</p>
              </div>

              <div className='flex flex-col items-center justify-start font-lato'>
                <div className='border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full'>
                  <MapPin size={windowWidth > 768 ? 42 : 28} className='text-neutral' />
                </div>
                <p className='font-semibold text-neutral'>Address</p>
                <p className='text-center text-balance text-neutral/80'>135 San Lorenzo Ave Penthouse 830</p>
                <p className='text-center text-balance text-neutral/80'>Coral Gables, FL 33146, USA.</p>
              </div>

              <div className='flex flex-col items-center justify-start font-lato'>
                <div className='border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full'>
                  <Phone size={windowWidth > 768 ? 42 : 28} className='text-neutral' />
                </div>
                <p className='font-semibold text-neutral'>Call Us</p>
                <p className='text-center text-balance text-neutral/80'>+1 305-860-2562</p>
              </div>

              <div className='flex flex-col items-center justify-start font-lato'>
                <div className='border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full'>
                  <Mail size={windowWidth > 768 ? 42 : 28} className='text-neutral' />
                </div>
                <p className='font-semibold text-neutral'>Email</p>
                <p className='text-center text-balance text-neutral/80'>info@company.com</p>
              </div>

            </div>

            <div className='xs:w-full sm:w-full md:w-1/2 xs:h-72 sm:h-72 md:h-full relative'>
              <div 
              // ref={mapDiv} 
              className='w-full h-full' 
              />
              <img 
              src={MaceyMap} 
              alt="macey location" 
              className='object-cover h-full w-full'
              />
            </div>
          </div>
        </div>

      </section>
      <section className='section-container'>
        <div className="flex flex-col items-center xs:mt-10 sm:mt-10 xs:px-10 sm:px-10 lg:px-0 lg:my-20">
          <h2 className='section-title text-center text-[rgb(24,25,26)] '>Fill the form below</h2>
          <h3 className='section-text text-center text-[rgb(57,58,59)] mb-8'>And we'll respond promptly</h3>
          <form
            action="POST"
            // onSubmit={sendMessage}
            className="flex flex-col items-center gap-6 w-full"
          >
            <div className="grid gap-6 sm:grid-cols-6 w-full">
              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="text"
                  name="firstName"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="First Name"
                />
                <label className="form-label">First name</label>
              </div>

              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="text"
                  name="lastName"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Last Name"
                />
                <label className="form-label">Last name</label>
              </div>

              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="text"
                  name="email"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Email"
                />
                <label className="form-label">Email</label>
              </div>

              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="text"
                  name="phone"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Phone"
                />
                <label className="form-label">Phone</label>
              </div>

              <div className="relative z-0 mb-4 xs:col-span-3 sm:col-span-3 md:col-span-6">
                <textarea
                  name="message"
                  className="peer resize-none h-32 form-input"
                  placeholder=" "
                  aria-label="Your Message"
                ></textarea>
                <label className="form-label">Your message</label>
              </div>

            </div>
            <button type='submit' className='text-neutral text-lg font-lato font-semibold bg-[#1C3C7B] px-4 py-2 xs:w-full sm:w-full lg:w-auto lg:self-end'>SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Index