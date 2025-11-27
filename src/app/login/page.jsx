"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.error) {
      router.push("/products");
    } else {
      setError("Invalid credentials");
    }
  };

  const googleLogin = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="card w-96 p-6 shadow-xl space-y-3 border"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="btn btn-primary w-full">Login</button>

        {/* Google Login */}
        <button
          type="button"
          onClick={googleLogin}
          className="btn btn-accent w-full"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}
