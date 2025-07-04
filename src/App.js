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
import  Careers  from './Components/Careers';
import { BrowserRouter } from 'react-router-dom';
import Manufacturing from './Components/Manufacturing';
import Healthcare from './Components/Healthcare';
import HigherEducation from './Components/HigherEducation';
import Logistics from './Components/Logistics';
import FinanceSection from './Components/FinanceSection';
import CapitalMarketSection from './Components/CapitalMarketSection'
import EnterpriseTechnologySection from './Components/EnterpriseTechnologySection';

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
{/* <CareerBanner/> */}
<Careers/>
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

function ManufacturingComponent(){
  document.title="Manufacturing | Unibanque"
return(
<>
<Navbar/>
<Manufacturing/>
<CallBackForm/>
<Footer/>



</>


)




}

function HealthcareComponent(){
    document.title="Healthcare | Unibanque"
  return(
    <>
    <Navbar/>
    <Healthcare/>
    <CallBackForm/>
    <Footer/>
    
    
    
    
    </>
  )
}


function HigherEducationComponent(){
      document.title="Higher Education | Unibanque"
  return(
    <>
    <Navbar/>
    <HigherEducation/>
    <CallBackForm/>
    <Footer/>
    
    
    
    
    </>
  )
}


function LogisticsComponent(){
  document.title="Logistics | Unibanque"
return(
<>
<Navbar/>
<Logistics/>
<CallBackForm/>
<Footer/>



</>


)


}




function WhyChooseUsComponent(){

    document.title="Why Choose Us ? | Unibanque"

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

function IndustriesComponent(){
  document.title="Industries | Unibanque"
return(
<>
<Navbar/>
<IndustriesSection/>
<CallBackForm/>
<Footer/>
</>
)
}

function FinanceComponent(){
  document.title="Finance | Unibanque"
return(
<>
<Navbar/>
<FinanceSection/>
<CallBackForm/>
<Footer/>
</>
)
}

function CapitalMarketComponent(){
  document.title="CapitalMarket | Unibanque"
return(
<>
<Navbar/>
<CapitalMarketSection/>
<CallBackForm/>
<Footer/>
</>
)
}

function EnterpriseTechComponent(){
  document.title="Enterprise Technology | Unibanque"
return(
<>
<Navbar/>
<EnterpriseTechnologySection/>
<CallBackForm/>
<Footer/>
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
  <BrowserRouter basename="/Unibanque-web">
     
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
               <Route path="/about-us" element={<About />} />
               <Route path="/contact" element={<ContactUsPage />} /> 
                   <Route path="/careers" element={<Career />} />
                     <Route path="/mission-vision" element={<MissionAndVision />} />
                                          <Route path="/why-choose-us" element={<WhyChooseUsComponent />} />

  <Route path="/manufacturing" element={<ManufacturingComponent />} />
    <Route path="/healthcare" element={<HealthcareComponent />} />
      <Route path="/higher-education" element={<HigherEducationComponent />} />
        <Route path="/logistics" element={<LogisticsComponent />} />



             <Route path="/services/financial-planning" element={<FinancialPlanningDetailsComponent />} />
             <Route path="/services/custom-solutions" element={<CustomSolutionsDetailsComponent />} />
             <Route path="/industries" element={<IndustriesComponent />} /> 

             <Route path="/finance" element={<FinanceComponent />} />
             <Route path="/capital-market" element={<CapitalMarketComponent />} />
             <Route path="/enterprise-tech" element={<EnterpriseTechComponent /> }/>
             </Routes>
  
    </BrowserRouter>
    </div>



  );
}

export default App;
