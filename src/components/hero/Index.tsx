import { HeroBackground } from "../../utils/images";

const Index = () => {
  return (
    <header className="h-screen relative w-full flex flex-col justify-center overflow-hidden">
      <div className="z-[1] xs:pl-4 sm:pl-4 lg:pl-0 lg:w-[80%] lg:mx-auto">
        <h1 className="font-raleway font-bold xs:text-6xl sm:text-6xl text-neutral text-pretty">
          Ignite Your Legal Success
        </h1>
        <p className="font-lato font-medium xs:text-xl sm:text-xl text-neutral/90 pt-2 text-balance">
          Decades of Victory, A Tradition of Excellence
        </p>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroBackground})`,
          transform: "rotateX(360deg)",
        }}
      >
        <div className="h-full w-full bg-black/60"></div>
      </div>
    </header>
  );
};

export default Index;
