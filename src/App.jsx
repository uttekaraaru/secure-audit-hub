import { Routes, Route } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollToTop";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ISO27001 from "./pages/ISO27001";
import ISO27002 from "./pages/ISO27002";
import ISO42001 from "./pages/ISO42001";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/iso27001" element={<ISO27001 />} />
        <Route path="/iso27002" element={<ISO27002 />} />
        <Route path="/iso42001" element={<ISO42001 />} />

        {/* Resources */}
        <Route path="/resources" element={<Resources />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      
      <Footer />
    </>
  );
}

export default App;
