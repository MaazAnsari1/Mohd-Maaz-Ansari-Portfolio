import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/landingPage";
import AboutPage from "./pages/about-page/about";
import ContactPage from "./pages/contact-page/contact";
import ProjectsPage from "./pages/project-page/project";
import UsedAsserts from "./pages/used-asserts/used-asserts";
import Navbar from "./components/navbar-components/navbar/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/usedAsserts" element={<UsedAsserts />} />
      </Routes>
    </Router>
  );
};

export default App;
