import { motion } from "framer-motion";
import { HeroBackground } from "../../utils/images";

const Index = () => {
  return (
    <header
      id="hero"
      className="h-screen relative w-full flex flex-col justify-center overflow-hidden"
    >
      <div className="z-[1] xs:pl-4 sm:pl-4 lg:pl-0 lg:w-[80%] lg:mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-raleway font-bold xs:text-6xl sm:text-6xl text-neutral text-pretty"
        >
          Ignite Your Legal Success
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-lato font-medium xs:text-xl sm:text-xl text-neutral/90 pt-2 text-balance"
        >
          Decades of Victory, a Tradition of Excellence
        </motion.p>
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
