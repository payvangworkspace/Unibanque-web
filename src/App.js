import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection  from './Components/HeroSection';
import WhyChooseUs from './Components/WhyChooseUs';
import InnovationSection from './Components/InnovationSection';
import InfoCards from './Components/InfoCards';
import StatsSection from './Components/StatsSection';
import ProductServices from './Components/ProductServices';
import IndustriesSection from './Components/IndustriesSection';
import CallBackForm from './Components/CallBackForm';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import AboutUsBanner from './Components/AboutUsBanner';
import { MissionBanner } from './Components/MissionBanner';
import { MissionVision } from './Components/MissionVision';



function Home(){
  document.title="Home | Unibanque"
  return (
    <>
    
      <Navbar/>
      <HeroSection/>
      <InfoCards/>
      <InnovationSection/>
     <WhyChooseUs/>
      <StatsSection/>
      <ProductServices/>
      <IndustriesSection/>
      <CallBackForm/>
      <Footer/>
    
    
    </>





  )
}



function About(){
  document.title="About Us | Unibanque"
  return (
<>
<Navbar/>
<AboutUsBanner/>
<AboutUs/>
<CallBackForm/>
<Footer/>

</>


  )

}




function MissionAndVision(){

  document.title="Mission & Vision | Unibanque"



return (
<>

<Navbar/>
<MissionBanner/>
<MissionVision/>


</>



)



}




function Services(){
  return (
<>
<Navbar/>
{/* <CallBackForm/>
<Footer/> */}



</>



  )
}



function App() {




  return (
    // <div className="App">
    //   <Navbar/>
    //   <HeroSection/>
    //   <InfoCards/>
    //   <InnovationSection/>
    //   {/* <WhyChooseUs/> */}
    //   <StatsSection/>
    //   <ProductServices/>
    //   <IndustriesSection/>
    //   <CallBackForm/>
    //   <Footer/>

    // </div>


   



    <div>
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
               <Route path="/about-us" element={<About />} />
                  <Route path="/mission-vision" element={ <MissionAndVision />} />
             </Routes>
  
    </Router>
    </div>



  );
}

export default App;
