'use client'; // This is needed for client-side interactivity

import React, { useState } from "react";

const LoginModal = ({ toggleLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Simulating login validation (Replace with your actual login logic)
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
      toggleLoginModal(); // Close the modal
      // Redirect to home or another page
      // router.push('/home');  // Example of redirect
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={toggleLoginModal}
              className="text-primary"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-full"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
