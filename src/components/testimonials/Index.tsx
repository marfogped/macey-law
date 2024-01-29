import React, { useRef, useState } from 'react';
import { TESTIMONIALS } from '../../utils/constants';
import { Quote, ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import "./Testimonials.css"

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className='h-max w-full bg-[#F8F8FF] py-8'>
      <div className='section-container'>
        <div className='flex xs:flex-col sm:flex-col lg:flex-row items-center justify-between w-[50%] mx-auto my-12'>
          <h2 className='section-title text-center'>They <span className='text-lightBlue'>trust us.</span></h2>
          <div className='flex items-center xs:flex-col sm:flex-col xxl:flex-row'>
            <div className='flex items-center flex-row gap-2'>
              <div className='flex items-center gap-2'>
                <Star className="star-filled" />
                <Star className="star-filled" />
                <Star className="star-filled" />
                <Star className="star-filled" />
                <StarHalf className="star-filled" />
              </div>
              <div className='text-lg font-semibold text-black'>4.5</div>
            </div>
            <div className='text-lg font-semibold text-lightBlue ml-2'>+1000 reviews</div>
          </div>
        </div>

      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="py-8 xs:w-[90%] sm:w-[90%] md:w-full"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {
          TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className='flex flex-col p-8 relative'>
                <Quote className='absolute xs:left-1 sm:left-1 md:-left-3 rotate-180' />
                <Quote className='absolute xs:right-1 sm:right-1 md:-right-3 bottom-14' />
                <div>
                  <p className='xs:text-md sm:text-lg xl:text-2xl text-start text-balance font-lato'>{testimonial.description}</p>
                </div>

                <div className='self-start mt-10'>
                  <p className='font-lato text-lg'>-{testimonial.author}</p>
                </div>
              </div>
            </SwiperSlide>

          ))
        }
      </Swiper>

      <div className='text-center mt-4 flex items-center justify-center mb-10 gap-2'>
        <button className="swiper-button-prev"> <ChevronLeft /> </button>
        <span> {currentSlide + 1} / {TESTIMONIALS.length} </span>
        <button className="swiper-button-next"> <ChevronRight /> </button>
      </div>
    </section>
  )
}

export default Index