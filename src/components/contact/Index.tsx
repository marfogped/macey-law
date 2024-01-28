import React from 'react'
import { MapPin, Phone, Mail, NotebookTabs } from 'lucide-react';
import { MaceyMap } from '../../utils/images';
import "./Contact.css"
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import { LatLngTuple } from 'leaflet';


const Index: React.FC = () => {

  // const position: LatLngTuple = [25.73192155260783, -80.25748545972051];

  return (
    <>
      <section className='w-full h-max bg-[#0F0F1C] py-12'>
        <div className='section-container flex items-center'>
          <div className='h-[70%] xs:w-[90%] sm:w-[90%] lg:w-full mx-auto bg-white grid lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1'>
            <div className='grid grid-cols-2 p-4'>
              <div className='flex flex-col items-center justify-center font-lato'>
                <div className='border border-[rgb(25,26,26)] p-8 rounded-full'>
                  <NotebookTabs size={42} />
                </div>
                <p className='font-semibold'>Contact Us</p>
                <p className='text-center'>If you're facing legal challenges, don't hesitate to reach out to us for expert guidance and support.</p>
              </div>

              <div className='flex flex-col items-center justify-center font-lato'>
                <div className='border border-[rgb(25,26,26)] p-8 rounded-full'>
                  <MapPin size={42} />
                </div>
                <p className='font-semibold'>Address</p>
                <p className='text-center'>135 San Lorenzo Ave Penthouse 830</p>
                <p className='text-center'>Coral Gables, FL 33146, USA.</p>
              </div>

              <div className='flex flex-col items-center justify-center font-lato'>
                <div className='border border-[rgb(25,26,26)] p-8 rounded-full'>
                  <Phone size={42} />
                </div>
                <p className='font-semibold'>Call Us</p>
                <p className='text-center'>+1 305-860-2562</p>
              </div>

              <div className='flex flex-col items-center justify-center font-lato'>
                <div className='border border-[rgb(25,26,26)] p-8 rounded-full'>
                  <Mail size={42} />
                </div>
                <p className='font-semibold'>Email</p>
                <p className='text-center'>info@company.com</p>
              </div>

            </div>

            <div className='w-full h-full relative'>
              <img 
              src={MaceyMap} 
              alt="macey location" 
              className='object-cover h-full'
              />
            </div>
          </div>
        </div>

      </section>
      <section className='section-container'>
        <div className="col-span-3 md:col-span-3 xs:mt-10 sm:mt-10 xs:px-10 sm:px-10 lg:px-0 lg:my-20">
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
            <button type='submit' className='text-neutral text-lg font-lato font-semibold bg-[#1C3C7B] px-4 py-2'>SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Index