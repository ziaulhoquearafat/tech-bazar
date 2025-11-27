"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // -------------------------------
  // Register with Email/Password
  // -------------------------------
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        localStorage.setItem("user", JSON.stringify({ name, email }));
        router.push("/"); // redirect to home
      }
    } catch (err) {
      setError("Server error, try again later");
    }
  };

  // -------------------------------
  // Google Register/Login
  // -------------------------------
  const handleGoogleRegister = async () => {
    try {
      const googleAuth = window.google;
      if (!googleAuth) return alert("Google auth not loaded");

      googleAuth.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: async (response) => {
          const token = response.credential;

          const res = await fetch("http://localhost:5000/google-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });

          const data = await res.json();
          if (res.ok) {
            localStorage.setItem("user", JSON.stringify(data));
            router.push("/");
          } else {
            setError(data.message || "Google login failed");
          }
        },
      });

      googleAuth.accounts.id.prompt();
    } catch (err) {
      console.log(err);
      setError("Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleRegister}
          className="btn btn-outline btn-secondary w-full"
        >
          Register with Google
        </button>
      </div>
    </div>
  );
}
