"use client";
import AppContext from "@/context/AppContext";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

function SignUpPage() {
  const { setUser, setLoggedIn } = useContext(AppContext)!;
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function clearForm() {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }
  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "An error occurred");
        clearForm();
        return;
      }
      // sign up was successfull
      toast.success(data.message || "User created successfully");
      setUser(data.user);
      setLoggedIn(true);
      localStorage.setItem("token", data.token);
      clearForm();

      // redirect to home page
      setTimeout(() => {
        redirect("/");
      }, 1000);


      
    } catch (ex: unknown) {
      if (ex instanceof Error) {
        setError(ex.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded shadow-md w-96 border border-gray-300"
      >
        <h1 className="text-xl font-bold mb-4 text-center">Sign Up</h1>
        <div>
          <label htmlFor="fullname">Full name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full border px-4 rounded py-1.5"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full border px-4 rounded py-1.5"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="w-full border px-4 rounded py-1.5"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white w-full py-2 rounded mt-6 cursor-pointer"
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
        <p className="text-red-600 text-center">{error}</p>
        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-black">
            Login
          </a>
        </p>
      </form>
    </main>
  );
}

export default SignUpPage;
