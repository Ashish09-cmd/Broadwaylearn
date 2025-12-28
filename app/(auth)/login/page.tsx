"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-primary">
    <div className="flex items-center  gap-8 flex-col">
      <div>
        <Link href="/">
          <img src="./login-logo.png" alt="" className="h-14 w-auto "/>
        </Link>
      </div>
      <div className="bg-white w-full max-w-md rounded-xl p-8 shadow-lg">
        <h2 className="text-xl font-bold text-text-heading line-height-xl font-geologica mb-1 text-center ">
          Continue your Learning
        </h2>
        <p className="text-center text-sm font-regular  text-[#8D9296] mb-6">
          Access your courses and continue building your skills.
        </p>
        <form className="space-y-4 mt-6">
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded-md px-4 py-2 mt-1 outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-md px-4 py-2 mt-1 outline-none focus:border-primary"
            />
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-red-500">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-medium"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          New to Broadway Learn?{" "}
          <Link href="/signup" className="text-primary font-medium">
            Sign Up
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
