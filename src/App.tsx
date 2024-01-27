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
      <main>
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
