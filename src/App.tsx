import { 
  Navbar,
  Hero,
  AboutUs,
  PracticeAreas,
  Testimonials,
  MayaMaceyFoundation,
  Contact,
  Footer
} from "./components";


function App() {

  return (
    <>
      <Navbar />
      <main className="xl:w-[80%] mx-auto xs:w-full sm:w-full">
        <Hero />
        <AboutUs />
        <PracticeAreas />
        <Testimonials />
        <MayaMaceyFoundation />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
