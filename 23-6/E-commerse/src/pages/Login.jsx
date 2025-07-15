import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("✅ Login page loaded");
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("⚠ Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/v2/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("authenticated", "true"); // ✅ Set auth state
        alert("✅ Login successful!");
        navigate("/home");
      } else {
        alert("❌ Invalid credentials. Try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("❌ Something went wrong. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center text-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form Content */}
      <form
        onSubmit={loginHandler}
        className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-xl border border-white/40 p-10 rounded-3xl shadow-2xl font-sans"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 drop-shadow tracking-wide">
          Welcome Back, Please Log in
        </h2>

        <div className="flex flex-col gap-6">
          <Input
            inputValue={email}
            type="email"
            setInputValue={setEmail}
            placeholder="Enter your email"
            labelName="Email"
          />
          <Input
            inputValue={password}
            type="password"
            setInputValue={setPassword}
            placeholder="Enter your password"
            labelName="Password"
          />

          <button
            type="submit"
            className="mt-2 w-full text-black font-bold py-3 rounded-full hover:scale-95 hover:shadow-lg transition-all duration-300 tracking-wide hover:bg-slate-500 hover:cursor-pointer"
          >
            Login Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
