'use client'

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loginUser } from "@/services/auth";
import { useRouter } from "next/navigation";



export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const router = useRouter();


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const user = await loginUser(formData.username, formData.password);
      console.log("User logged in:", user);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-screen h-dvh bg-pattern flex items-center">
      <main className="w-full max-w-2xl h-10/12 my-auto md:h-full mx-auto text-center bg-black flex flex-col justify-center items-center gap-7">
        <div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p>Enter your details to continue</p>
        </div>

        {error && (
          <div className="w-3/4 max-w-md px-5 py-1.5 bg-red-500 border flex justify-between">
            <p className="text-sm">{error}</p>
            <button className="cursor-pointer" onClick={() => setError("")}>×</button>
          </div>
        )}

        <form className="w-3/4 max-w-md flex flex-col gap-2.5" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="border border-white px-4 py-1"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-white px-4 py-1"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <Button className="w-fit mx-auto mt-4 py-1 px-24">Sign in</Button>
        </form>

        <div className="text-xs flex flex-col gap-2">
          <Link href="#/forgot-password" className="underline">Forgot your password?</Link>
          <Link href="/register" className="underline">Need an account?</Link>
        </div>
      </main>
    </div>
  )
}