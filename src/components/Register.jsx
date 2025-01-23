import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
      const [email, setEmail] = useState("");
    console.log(password,confirmPassword,email)
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      {/* Logo */}
      <div className="mb-8">
        <img src="" alt="Amazon.in" width={120} height={36} priority />
      </div>

      {/* Sign in card */}
      <div className="w-full max-w-[350px] border border-gray-300 rounded-lg p-6 space-y-4">
        <h1 className="text-2xl font-normal mb-4">Sign in or create account</h1>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm">
            Enter mobile number or email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
          onChange={(e) => {
              setEmail(e.target.value);
            }}
                  />
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="confirm password"
            id="Confirm Password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-normal py-2 rounded focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 outline-none">
          Continue
        </button>

        <p className="text-xs">
          By continuing, you agree to Amazons{" "}
          <Link className="text-blue-600 hover:text-orange-600 hover:underline">
            Conditions of Use
          </Link>{" "}
          and{" "}
          <Link className="text-blue-600 hover:text-orange-600 hover:underline">
            Privacy Notice
          </Link>
          .
        </p>

        <div className="pt-4">
          <h2 className="text-sm font-bold">Buying for work?</h2>
          <Link className="text-sm text-blue-600 hover:text-orange-600 hover:underline">
            Shop on Amazon Business
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-xs text-center space-y-4">
        <div className="space-x-6">
          <Link className="text-blue-600 hover:text-orange-600 hover:underline">
            Conditions of Use
          </Link>
          <Link className="text-blue-600 hover:text-orange-600 hover:underline">
            Privacy Notice
          </Link>
          <Link className="text-blue-600 hover:text-orange-600 hover:underline">
            Help
          </Link>
        </div>
        <div className="text-gray-600">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
}
