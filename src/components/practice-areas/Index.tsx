import React, { useState } from 'react';
import { PRACTICE_AREAS, PracticeAreaProps } from '../../utils/constants';
import Card from './components/Card';
import { Modal } from '..';

const Index: React.FC = () => {
  const [inView, setInView] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<PracticeAreaProps | null>(null)
  return (
    <section className='w-full h-max bg-[#0F0F1C] py-12' id='practice-areas'>
      <div className='section-container flex flex-col items-center gap-6'>
        <header className='h-max xs:w-[90%] sm:w-[90%] md:w-full mx-auto bg-neutral/10 py-4 flex flex-col items-center justify-center'>
          <h2 className='section-title text-neutral text-center'>Leading the Way in Advanced and Group Litigation</h2>
          <p className='section-text text-neutral/80 pt-4'>View our Practice Areas</p>
        </header>

        <div className="xs:w-[90%] sm:w-[90%] mx-auto md:w-full h-max grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 grid-flow-row-dense gap-6">
          {PRACTICE_AREAS.map((card) => (
            <Card key={card._id} card={card} setSelectedArea={setSelectedArea} setInView={setInView} />
          ))}
        </div>
      </div>

      <Modal 
        height='max-content'
        width='50vw'
        show={inView} 
        onClose={() => {
          setInView(false);
          setTimeout(() => {            
            setSelectedArea(null);
          }, 250);
        }}
        >
        <div className='w-full h-full xs:p-2 sm:p-2 md:p-8'>
          <header className='w-full py-4 mb-5'>
            <h2 className='xs:text-xl sm:text-xl xl:text-2xl font-raleway font-semibold text-[rgb(24,25,26)]'> {selectedArea?.label} </h2>
            <hr className='w-full bg-[#0F0F1C]' />
          </header>
          <section className='w-full h-max'>
            <p className='text-balance xs:text-lg sm:text-lg md:text-xl text-[rgb(57,58,59)] font-lato'>{selectedArea?.description}</p>
          </section>
        </div>
      </Modal>
    </section>
  )
}

export default Index