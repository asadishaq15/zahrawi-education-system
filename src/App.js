import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import HomePage from './pages/homePage';
import About from './pages/about';
import AdmissionForm from './pages/admissionForm';
import Header from './components/header';
import EmployeeForm from './pages/employeeForm';
import Footer from './components/footer';
import PgToMetric from './pages/pgToMetric';
import ScienceAcademy from './pages/scienceAcademy';
import QuranAcademy from './pages/quranAcademy';
import Ziet from './pages/ziet';
import WhyZahrawi from './pages/whyZaharawi';
import VisionAndMission from './pages/visionAndMission';
import ContactUsForm from './pages/contactUs';
import ZahrawiAtGlance from './pages/zahrawiAtGlance';
import ChairmanMessage from './pages/chairmanMessage';

function App() {
  
  return (
    <div>
     
      <Header />
      <div className='body-wrap'>
      
      <Routes>
      <Route path="/zahrawi-at-a-glance" element={<ZahrawiAtGlance/>} />
      <Route path="/contact-form" element={<ContactUsForm />} />
      <Route path="/vision-mission" element={<VisionAndMission />} />
      <Route path="/why-zahrawi" element={<WhyZahrawi />} />
      <Route path="/principal-message" element={<ChairmanMessage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ziet" element={<Ziet />} />
        <Route path="/Quran-academy" element={<QuranAcademy />} />
        <Route path="/science-academy" element={<ScienceAcademy />} />
        <Route path="/higher-secondary" element={<PgToMetric />} />
        <Route path="/admissionform" element={<AdmissionForm />} />
        <Route path='/apply-jobs' element={<EmployeeForm/>}></Route>
        <Route path="/" element={<HomePage />} />
      </Routes>
     
      <Footer/>
      </div>
    </div>
  );
}

export default App;
