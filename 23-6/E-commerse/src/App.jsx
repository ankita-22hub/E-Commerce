import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Login from "./pages/Login";
import SignupPage from "./pages/SignupPage";
import ECommersePage from "./pages/E-CommersePage";

function App() {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  return (
    <div className="min-h-screen w-full text-white">
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login & Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Route: Only accessible if logged in */}
        <Route
          path="/home"
          element={
            isAuthenticated ? <ECommersePage /> : <Navigate to="/login" />
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
