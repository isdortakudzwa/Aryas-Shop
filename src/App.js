// App.jsx
import './App.css';
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs';
import CollectionPage from './components/CollectionsPage';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import KidsCollectionPage from './components/Shop';


function App() {
  return (  
    
      <div className="main-section">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/CollectionPage" element={<CollectionPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/KidsCollectionPage" element={<KidsCollectionPage />} />
        </Routes>

        <Footer />
      </div>
   
  );
}

export default App;