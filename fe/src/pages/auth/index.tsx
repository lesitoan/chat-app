import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

const Auth = () => {
  const [currentForm, setCurrentForm] = useState<"login" | "signup">("login");
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome to Chat App
        </h2>
        <p className="text-gray-600 mb-4">
          Please log in or sign up to continue.
        </p>
        <div className="flex justify-between gap-2">
          <button
            className={`${currentForm === "login" && "bg-blue-500 text-white"} px-4 py-2 rounded w-1/2 cursor-pointer`}
            onClick={() => setCurrentForm("login")}
          >
            Log In
          </button>
          <button
            className={`${currentForm === "signup" && "bg-blue-500 text-white"} px-4 py-2 rounded w-1/2 cursor-pointer`}
            onClick={() => setCurrentForm("signup")}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-6">
          {currentForm === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
