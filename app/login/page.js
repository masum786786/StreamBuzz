"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // hardcoded admin password
    if (password === "admin1111") {
      localStorage.setItem("isAdmin", "true");
      router.push("/");
    } else {
      alert("Invalid admin password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <h1 className="text-3xl font-bold mb-6">🔐 Admin Login</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Admin Password"
        className="px-4 py-2 rounded text-black mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300"
      >
        Login
      </button>
    </div>
  );
}
