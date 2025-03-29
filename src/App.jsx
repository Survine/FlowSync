import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={
          <div>
            <Navbar />
            <div className="mx-auto px-6 pt-20 max-w-7xl">
              <HeroSection />
              <FeatureSection />
              <Workflow />
              <Pricing />
              <Testimonials />
              <Footer />
              <Dashboard />
            </div>
          </div>
        }/>

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />
        
        {/*Admin Page Route */}
        <Route path="/admin" element={<Admin />} />

        {/* Signup Page Route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard Page Route */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;