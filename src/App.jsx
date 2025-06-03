import Header from './components/Header';
import Hero from './components/Hero';
import ExclusiveTravel from './components/ExlusiveTravel';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: 'ease-in-out',
    });
  });

  return (
    <main>
      {/* Gradient Image */}
      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/images/gradient.png' alt='background- gradient'/>

      {/* Blur Effect */}
      <div className='absolute h-0 w-[20rem] top-[20%] right-[-5%] shadow-[0_0_900px_40px_#e99b63] -rotate-[30deg] -z-10'/>

      <Header />
      <Hero />
      <About />
      <ExclusiveTravel />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App