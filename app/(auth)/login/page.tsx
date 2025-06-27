"use client";
import { toast } from "react-toastify";
import { FormEvent, useContext, useState } from "react";
import AppContext from "@/context/AppContext";
import { redirect } from "next/navigation";

function LoginPage() {
  const { setUser, setLoggedIn } = useContext(AppContext)!;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  function clearForm() {
    setFormData({
      email: "",
      password: "",
    });
  }
  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (!data.success) {
        setError(data.error);
        return;
      }

      toast.success(data.message);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      setLoggedIn(true);
      setTimeout(() => redirect("/"), 1000);
    } catch (ex: unknown) {
      if (ex instanceof Error) {
        setError(ex.message);
      }
      setError("Error occoured logging in.");
    } finally {
      setLoading(false);
      clearForm();
    }
  }
  return (
    <main className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded shadow-md w-96 border border-gray-300"
      >
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
        <div>
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            name="password"
            required
            className="w-full border px-4 rounded py-1.5"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white w-full py-2 rounded mt-6 cursor-pointer"
        >
          {!isLoading ? "Login" : "Loading..."}
        </button>
        <p className="text-center text-red-500">{error}</p>
        <p className="mt-4 text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-black">
            Register
          </a>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
