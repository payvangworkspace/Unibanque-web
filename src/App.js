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



function Services(){
  return (
<>
<Navbar/>
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
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
             </Routes>
  
    </Router>
    </div>



  );
}

export default App;
