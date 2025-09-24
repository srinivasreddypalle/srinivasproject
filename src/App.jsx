import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Exams from "./Pages/Exams";
import ExamDetail from "./Pages/ExamDetail";
import Results from "./Pages/Results";
import ResultsHistory from "./Pages/ResultsHistory";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings"; 
import ChangePassword from "./Pages/ChangePassword";
import UpdateEmail from "./Pages/UpdateEmail";

import Dashboard from "./Pages/Dashboard"; // Capital D

// Global CSS
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/exams/:id" element={<ExamDetail />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Capital D */}
          <Route path="/results" element={<Results />} />
          <Route path="/results-history" element={<ResultsHistory />} />
          <Route path="/quizzes" element={<div>Quizzes Page</div>} /> 
          <Route path="/test-details" element={<div>Test Details Page</div>} />
           <Route path="profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
             <Route path="/settings/change-password" element={<ChangePassword />} />
        <Route path="/settings/update-email" element={<UpdateEmail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
