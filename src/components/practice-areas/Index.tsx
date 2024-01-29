import React, { useState } from 'react';
import { PRACTICE_AREAS, PracticeAreaProps } from '../../utils/constants';
import Card from './components/Card';
import { Modal } from '..';

const Index: React.FC = () => {
  const [inView, setInView] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<PracticeAreaProps | null>(null)
  return (
    <section className='w-full h-max bg-[#0F0F1C] py-12' id='practice-areas'>
      <div className='section-container flex flex-col items-center gap-5'>
        <header className='h-max xs:w-[90%] sm:w-[90%] md:w-full mx-auto bg-neutral/10 py-4 flex flex-col items-center justify-center'>
          <h2 className='section-title text-neutral text-center'>Leading the Way in Advanced and Group Litigation</h2>
          <p className='section-text text-neutral/80 pt-4'>View our Practice Areas</p>
        </header>

        <div className="xs:w-[90%] sm:w-[90%] mx-auto md:w-full h-max grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 grid-flow-row-dense gap-5">
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
        <div className='w-full h-full p-8'>
          <header className='w-full bg-slate-100 p-4 mb-5'>
            <h2 className='xs:text-lg sm:text-lg md:text-xl xl:text-2xl font-lato font-semibold'> {selectedArea?.label} </h2>
          </header>
          <section>
            Practice Area description...
          </section>
        </div>
      </Modal>
    </section>
  )
}

export default Index