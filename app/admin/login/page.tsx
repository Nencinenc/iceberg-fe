"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className=" p-8 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
