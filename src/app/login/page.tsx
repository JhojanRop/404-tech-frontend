import Button from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-screen h-dvh bg-pattern flex items-center">
      <main className="w-full max-w-2xl h-10/12 my-auto md:h-full mx-auto text-center bg-black flex flex-col justify-center items-center gap-7">
        <div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p>Enter your details to continue</p>
        </div>

        <form className="w-3/4 max-w-md flex flex-col gap-2.5">
          <input type="text" placeholder="Username" className="border border-white px-4 py-1" />
          <input type="password" placeholder="Password" className="border border-white px-4 py-1" />
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