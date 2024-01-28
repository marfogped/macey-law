import React from 'react';
import { PRACTICE_AREAS } from '../../utils/constants';
import Card from './components/Card';

const Index: React.FC = () => {
  return (
    <section className='w-full h-max bg-[#0F0F1C] py-12'>
      <div className='section-container flex flex-col items-center gap-5'>
        <header className='h-max xs:w-[90%] sm:w-[90%] mx-auto bg-neutral/10 py-4 flex flex-col items-center justify-center'>
          <h2 className='section-title text-neutral text-center'>Leading the Way in Advanced and Group Litigation</h2>
          <p className='section-text text-neutral/80 pt-4'>View our Practice Areas</p>
        </header>

        <div className="xs:w-[90%] sm:w-[90%] mx-auto md:w-full h-max grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 grid-flow-row-dense gap-5">
          {PRACTICE_AREAS.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Index