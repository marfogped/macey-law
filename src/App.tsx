import {
  Navbar,
  Hero,
  AboutUs,
  PracticeAreas,
  Testimonials,
  MayaMaceyFoundation,
  Contact,
  Footer,
  News,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <PracticeAreas />
        <Testimonials />
        <MayaMaceyFoundation />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
