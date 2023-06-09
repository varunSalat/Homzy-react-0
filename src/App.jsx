import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/generalComponents/Footer';
import GetStarted from './components/getStarted/GetStarted';
import Header from './components/herosection/Header/Header';
import HeroSection from './components/herosection/herocomponent/HeroSection';
import OurClients from './components/ourClients/ourClients';
import ValueSection from './components/ourValues/ValueSection';
import PopularResidences from './components/popularResidences/PopularResidences';

function App() {
  return (
    <>
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
