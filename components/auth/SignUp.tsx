"use client"; 

import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="bg-white w-full max-w-md rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create your Account
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-4 py-2"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-2"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-4 py-2"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md font-medium"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
