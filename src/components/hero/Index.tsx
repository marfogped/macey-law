import { HeroBackground } from '../../utils/images'

const Index = () => {
  return (
    <header className='h-screen w-full flex flex-col justify-center'>
      <div className='z-[1] xs:pl-4 sm:pl-4 md:pl-0'>
        <h1 className='font-raleway font-bold xs:text-6xl sm:text-6xl text-neutral'>Macey Law</h1>
        <p className='font-lato font-medium xs:text-xl sm:text-xl text-neutral/70 pt-2'>Decades of Victory, A Tradition of Excellence</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${HeroBackground})`, transform: 'rotateX(360deg)' }}>
        <div className='h-full w-full bg-black/60'></div>
      </div>
    </header>
  )
}

export default Index