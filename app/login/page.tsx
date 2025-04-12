import React from "react";
import { FaGithub } from "react-icons/fa6";
import { BsMenuButtonWide } from "react-icons/bs";
import Link from "next/link";
const Login = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="bg-black flex flex-col justify-between">
        <Link
          href={"/home"}
          className="flex items-center p-10 text-2xl text-white gap-5"
        >
          <BsMenuButtonWide />
          <p className="">Back to Home</p>
        </Link>
        <div className=" text-white p-10">
          <div className="">
            <p className="italic ">
              &quot;This Library has saved me countless hours of work and helped
              me deliver stunning designs to my clients faster than ever
              before.&quot;
            </p>
            <p className="mt-2 font-medium">Sofia Davis</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email below to create your account
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create account
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center py-2 px-4 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  Github
                </button>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              <p>
                By clicking continue, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
