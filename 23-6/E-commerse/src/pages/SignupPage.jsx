import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function createUserHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3000/api/v2/signup`, {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response);

      if (response.data.success === true) {
        alert("✅ Signup successful!");
        localStorage.setItem("authenticated", "false"); // not logged in yet
        navigate("/login"); // go to login form
      }
    } catch (err) {
      if (err.response?.status === 409) {
        alert("⚠ User already exists. Please log in.");
        navigate("/login");
      } else {
        console.error("Signup Error:", err.message);
        alert("❌ Something went wrong. Please try again later.");
      }
    }
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center animate-fadeIn">
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

      {/* Sign-Up Form */}
      <form
        onSubmit={createUserHandler}
        className="relative z-10 w-full max-w-lg  backdrop-blur-lg border border-white/40 p-1 rounded-3xl shadow-2xl"
      >
        <div className="flex flex-col gap-6 font-sans text-gray-800">
          <div className="p-6 rounded-3xl bg-white/50 backdrop-blur-md border border-white/30 shadow-xl space-y-5">
            <h2 className="text-3xl font-extrabold text-center tracking-wide drop-shadow-md text-gray-900">
              Create a new account
            </h2>

            <Input
              inputValue={firstName}
              type="text"
              setInputValue={setFirstName}
              placeholder="First Name"
              labelName="First Name"
            />

            <Input
              inputValue={lastName}
              type="text"
              setInputValue={setLastName}
              placeholder="Last Name"
              labelName="Last Name"
            />

            <Input
              inputValue={email}
              type="email"
              setInputValue={setEmail}
              placeholder="Email Address"
              labelName="Email"
            />

            <Input
              inputValue={password}
              type="password"
              setInputValue={setPassword}
              placeholder="Password"
              labelName="Password"
            />

            <button
              type="submit"
              className="w-full mt-4  text-black font-bold py-3 rounded-full 
          hover:scale-95 hover:shadow-lg transition-all duration-300 tracking-wide hover:cursor-pointer hover:bg-slate-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
