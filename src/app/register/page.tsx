'use client'

import Button from "@/components/ui/Button"
import { useState } from "react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({ fullname: "", username: "", email: "", password: "" })
  const [error, setError] = useState("")

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="w-screen h-dvh bg-pattern">
      <main className="w-full max-w-2xl h-10/12 my-auto md:h-full mx-auto text-center bg-black flex flex-col justify-center items-center gap-7">
        <div>
          <h1 className="text-2xl font-bold">Get started with your account!</h1>
          <p>Please complete the following fields</p>
        </div>

        {error && (
          <div className="w-3/4 max-w-md px-5 py-1.5 bg-red-500 border flex justify-between">
            <p className="text-sm">{error}</p>
            <button className="cursor-pointer" onClick={() => setError("")}>×</button>
          </div>
        )}

        <form className="w-3/4 max-w-md flex flex-col gap-2.5" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Fullname"
            className="border border-white px-4 py-1"
            value={formData.fullname}
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="border border-white px-4 py-1"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-white px-4 py-1"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          <Button className="w-fit mx-auto mt-4 py-1 px-24">Sign up</Button>
        </form>
      </main>
    </div>
  )
}