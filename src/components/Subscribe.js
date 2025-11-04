"use client"; // Indicating this is a client component

import React, { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState("");  // Email state
    const [error, setError] = useState("");  // Error state

    // Email validation function
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log("Email submitted: ", email); // Log the email to console
            setError(""); // Clear error if email is valid
        } else {
            setError("Please enter a valid email address"); // Set error message
        }
    };

    return (
        <div className="mb-20 bg-slate-700 dark:bg-gray-800 text-white">
            <div className="container backdrop-blur-sm py-10">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold text-black">
                        Get Notified About New Products
                    </h1>

                    {/* Form with validation */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Handle email input change
                            className="w-full p-3 text-black" // Text color is black for input
                        />
                        {error && (
                            <p className="text-red-500 text-center mt-2">{error}</p> // Show error message
                        )}
                        <button
                            type="submit"
                            className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
