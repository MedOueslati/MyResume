import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import BuyDesigns from "./pages/BuyDesigns";
import Contact from "./pages/Contact";
import ScrollToTop  from "./ScrollToTop";
import Portfolio from "./components/Templates/Portfolio";
import Education from "./components/Templates/Education";
import Ecommerce from "./components/Templates/Ecommerce";
import Wavency from "./components/Templates/Wavency";

const App = () => {
  return (
   <Router>
  <ScrollToTop /> 

  <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/buy" element={<BuyDesigns />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wavency" element={<Wavency />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/education" element={<Education />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
    </Routes>
  </MainLayout>
</Router>

  );
};

export default App;
