import { useEffect, useState } from 'react';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/generalComponents/Footer';
import Preloader from './components/generalComponents/Preloader';
import GetStarted from './components/getStarted/GetStarted';
import Header from './components/herosection/Header/Header';
import HeroSection from './components/herosection/herocomponent/HeroSection';
import OurClients from './components/ourClients/ourClients';
import ValueSection from './components/ourValues/ValueSection';
import PopularResidences from './components/popularResidences/PopularResidences';
import SideTopBtn from './components/generalComponents/SideTopBtn';

function App() {
  const [isLoading,setIsLoading]=useState(true);
  

  useEffect(()=>{
    window.addEventListener("load",()=>{
    setIsLoading(false);
    document.querySelector('body').style.overflowY='scroll'
  });
  },[]);

  return (
    <>
      {isLoading&&<Preloader/>}
      <SideTopBtn/>
      <Header/>
      <HeroSection/>
      <OurClients/>
      <PopularResidences/>
      <ValueSection/>
      <ContactUs/>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default App
