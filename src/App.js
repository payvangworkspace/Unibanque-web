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
import CareerBanner from './Components/CareerBanner';
import { MissionBanner } from './Components/MissionBanner';
import MissionVision from './Components/MissionVision';
import {WhyChooseBanner} from './Components/WhyChooseBanner'
import ClientUnderstanding from './Components/ClientUnderstanding'
import ContactUs from './Components/ContactUs';
import ServicesList from './Components/ServiceList';
import FinancialPlanningDetails from './Components/FinancialPlanningDetails';
import CustomSolutionsDetails from './Components/CustomSolutionsDetails';

function Home(){
  document.title="Home | Unibanque"
  return (
    <>
    
      <Navbar/>
      <HeroSection/>
      <InfoCards/>
      <InnovationSection/>
     {/* <WhyChooseUs/> */}
      <StatsSection/>
      <ProductServices/>
      <IndustriesSection/>
      <CallBackForm/>
      <Footer/>
    
    
    </>





  )
}
 
function Career(){
  document.title="Career | Unibanque"
  return(
    <>
   <Navbar/>
<CareerBanner/>
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
<CallBackForm/>
<Footer/>


</>



)



}




function Services(){
  document.title="Services | Unibanque"
  return (
<>
<Navbar/>
<ServicesList />
<Footer/>
</>
  )
}

function FinancialPlanningDetailsComponent(){
  
  return (
<>
<Navbar/>
<FinancialPlanningDetails />
<Footer/>
</>
  )
}

function CustomSolutionsDetailsComponent(){
  
  return (
<>
<Navbar/>
<CustomSolutionsDetails />
<Footer/>
</>
  )
}



function WhyChooseUsComponent(){
  return(
    <>
    <Navbar/>
    <WhyChooseBanner/>
    <WhyChooseUs/>
   <ClientUnderstanding/>
    <CallBackForm/>
    <Footer/>
    
    
    </>
  )
}

function ContactUsPage() {
  document.title = "Contact Us | Unibanque";
  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer />
    </>
  );
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
               <Route path="/contact" element={<ContactUsPage />} /> 
                   <Route path="/careers" element={<Career />} />
                     <Route path="/mission-vision" element={<MissionAndVision />} />
                                          <Route path="/why-choose-us" element={<WhyChooseUsComponent />} />

             <Route path="/services/financial-planning" element={<FinancialPlanningDetailsComponent />} />
             <Route path="/services/custom-solutions" element={<CustomSolutionsDetailsComponent />} />
             </Routes>
  
    </Router>
    </div>



  );
}

export default App;
