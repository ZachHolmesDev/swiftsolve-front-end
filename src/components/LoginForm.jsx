import React, { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Handle form submission logic here
    }

    return (
        <div className="w-96 bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleFormSubmit}>
                <h1 className="text-black text-6xl font-bold mb-4">
                    SwiftSolve
                </h1>
                <h2 className="text-zinc-800 text-5xl font-bold mb-4">
                    Log In
                </h2>

                <div className="mb-4">
                    <label htmlFor="email" className="text-zinc-800 text-sm font-normal mb-1 block">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email Address"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="text-zinc-800 text-sm font-normal mb-1 block">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full h-12 px-4 py-3 bg-slate-100 border-b border-neutral-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Password"
                    />
                    <p className="text-zinc-500 text-xs">
                        It must be a combination of minimum 8 letters, numbers, and symbols.
                    </p>
                </div>

                {/* Implement the Remember me and Forgot password functionality here if needed */}

                <button
                    type="submit"
                    className="w-full h-12 bg-blue-600 text-white text-base font-medium rounded-lg"
                >
                    Log In
                </button>

                <hr className="my-4 border-t border-zinc-200" />

                <a href="#" className="text-center text-blue-950 text-sm">
                    No account yet? Sign Up
                </a>
            </form>
        </div>
    );
}

export default LoginForm;
