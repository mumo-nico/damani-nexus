import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Service Detail Pages
// import WebBusinessSystems from './pages/services/WebBusinessSystems';
// import GISServices from './pages/services/GISServices';
// Import other service pages as you create them
// import RemoteSensing from './pages/services/RemoteSensing';
// import HardwareIoT from './pages/services/HardwareIoT';
// etc...

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Detail Pages */}
            {/* <Route path="/services/web-business-systems" element={<WebBusinessSystems />} />
            <Route path="/services/gis-services" element={<GISServices />} /> */}
            {/* Add routes for other services as you create them */}
            {/* <Route path="/services/remote-sensing" element={<RemoteSensing />} /> */}
            {/* <Route path="/services/hardware-iot" element={<HardwareIoT />} /> */}
            {/* <Route path="/services/health-informatics" element={<HealthInformatics />} /> */}
            {/* <Route path="/services/agriculture-technology" element={<AgricultureTechnology />} /> */}
            {/* <Route path="/services/data-analytics" element={<DataAnalytics />} /> */}
            {/* <Route path="/services/cloud-devops" element={<CloudDevOps />} /> */}
            {/* <Route path="/services/cybersecurity" element={<Cybersecurity />} /> */}
            {/* <Route path="/services/training-consulting" element={<TrainingConsulting />} /> */}
            {/* <Route path="/services/digital-marketing" element={<DigitalMarketing />} /> */}
            {/* <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;