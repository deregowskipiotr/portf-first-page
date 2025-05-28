import Header from './components/Header';
import Hero from './components/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



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
      <img className='absolute top-0 right-0 opacity-60 -z-10' src='/gradient.png' alt='background- gradient'/>

      {/* Blur Effect */}
      <div className='absolute h-0 w-[40rem] top-[20%] right-[-5%] shadow-[0_0_900px_40px_#e99b63] -rotate-[30deg] -z-10'>

      </div>

      <Header />
      <Hero />
    </main>
  )
}

export default App