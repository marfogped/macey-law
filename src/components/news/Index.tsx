import React, { useState } from 'react'
import { NEWS_ARTICLES } from "../../utils/constants";
import { Plus, ExternalLink } from 'lucide-react';

type OpenDetailsType = {
  [key: number]: boolean;
};

const Index: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<OpenDetailsType>({});

  const toggleDetails = (id: number) => {
    setOpenDetails(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <section className='w-full h-max bg-[#0F0F1C] py-12'>
      <div className='xs:w-[90%] sm:w-[90%] md:w-[70%] h-max mx-auto'>
        <h2 className='section-title text-center text-neutral mb-8'>
          Legal Lens: <span className='text-lightBlue'>Macey Law on TV</span>
        </h2>
        <h3 className='section-text text-center text-neutral/80'>Browse our televised features on major networks, highlighting MACEY LAW's impactful presence in the legal arena.</h3>
      </div>
      <div className="section-container grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 py-8 gap-5">
        {
          NEWS_ARTICLES.map((article) => (
            <article
            style={{background: `${article.bkgColor}`}}
            className={`w-full h-96 overflow-hidden flex items-center justify-center px-4 relative`}
            key={article.id}
            onClick={() => toggleDetails(article.id)}
            >
              <div
              style={{background: `${article.btnColor}`}} 
              className='absolute top-2 right-2 rounded-full p-1 cursor-pointer'
              >
                {
                  openDetails[article.id] ? (
                    <Plus className={`${article.iconColor === "Light" ? "text-neutral" : "text-black"} transition-transform duration-200 rotate-45`} size={24} />
                    ) : (
                    <Plus className={`${article.iconColor === "Light" ? "text-neutral" : "text-black"} transition-transform duration-200 rotate-0`} size={24} />
                  )
                }
              </div>

              <div className={`absolute flex flex-col top-12 h-[21rem] w-full bg-neutral px-3 py-1.5 transition-transform card-shadow duration-500 ${openDetails[article.id] ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="flex flex-col flex-grow">
                  <div className='mb-2'>
                    <h4 className='text-pretty font-semibold text-lg font-raleway'>{article.title}</h4>
                    <hr className='w-full bg-[#0F0F1C] h-[2px]' />
                  </div>
                  <div className="flex-grow">
                    <p className='text-balance xs:text-md sm:text-md md:text-sm font-lato font-light text-black/80'>{article.description}</p>
                  </div>
                </div>
                <div className='mt-auto'>
                  {article.href && article.href.length ? (
                    <a 
                    href={article.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='bg-[#1C3C7B] flex items-center justify-center gap-1 py-1 text-neutral text-sm font-lato font-semibold text-center'
                    >
                      Learn More <ExternalLink size={18} /> 
                    </a>
                  ) : ("")}
                </div>
              </div>
              <img 
              src={article.image} 
              alt={article.title} 
              className='w-full h-auto'
              />
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Index