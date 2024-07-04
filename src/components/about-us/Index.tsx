import { motion } from "framer-motion";
const Index = () => {
  return (
    <section
      className="w-full h-max xs:py-6 sm:py-6 md:py-28 flex items-center"
      id="about"
    >
      <div className="section-container grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 py-16">
        <div className="lg:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Leaders in Sophisticated and Group Litigation{" "}
            <span className="text-lightBlue">Excellence</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="xs:mt-10 sm:mt-10 md:mt-0 lg:col-span-3"
        >
          <p className="section-text mb-6">
            Macey Law is a premier international law firm, dedicated to
            defending individuals charged with or under investigation for the
            commission of state or federal crimes.
          </p>
          <p className="section-text mb-6">
            With over 20 years of legal experience, Top Criminal Defense
            Attorney David Macey has the knowledge and experience to effectively
            advocate for you. As a former prosecutor specializing in narcotics
            and organized crimes, he understands the serious consequences you
            are facing and will fight aggressively for you. Macey Law is one of
            the Top Criminal Law Firms in Miami.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
