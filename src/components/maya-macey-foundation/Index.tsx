import React from 'react';
import { MayaMaceyFoundation } from '../../utils/images';

const Index: React.FC = () => {
  return (
    <section className='w-full h-max'>
      <div className='section-container grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 px-4 py-16 mx-auto place-items-start'>
        <div className="lg:col-span-2">
          <h2 className='section-title'>Empowering Resilient Students through <span className='text-lightBlue'>Scholarships</span></h2>
          <img 
          src={MayaMaceyFoundation} 
          alt="maya-macey-foundation" 
          className='h-72 w-auto mt-10'
          />
        </div>

        <div className='xs:mt-10 flex flex-col sm:mt-10 lg:mt-0 lg:col-span-3'>
          <p className='section-text mb-6'>The Maya Macey Foundation is a not for profit organization dedicated to providing scholarships for students who have overcome adversity in their lives and continue to pursue their dreams in spite of the obstacles they have faced.</p>
          <p className='section-text mb-6'>The scholarship is named after Maya Macey, a beautiful little girl who died 4 days after she was born. Shortly after Maya passedaway, her family made a commitment to never let go of her memory.</p>
          <p className='section-text mb-6'>The organization was created to help keep her name and spirit alive and provide help, in the form of educational scholarships, to deserving young students trying their best to further their education despite the obstacles they have faced. The Foundation has already given scholarships to many students in South Florida who have persevered through extremely difficult situations and continue to strive for success in their lives.</p>
          <button className='text-neutral text-lg font-lato mt-4 xs:w-full sm:w-full md:w-auto font-semibold bg-[#1C3C7B] px-4 py-2 self-end'>LEARN MORE</button>
        </div>
      </div>
    </section>
  )
}

export default Index