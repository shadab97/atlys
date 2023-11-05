import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Link from "next/link";
import WithBorder from "../HOC/withBorder";

const Login = () => {
  return (
    <div className="bg-bg_dark_light w-[463px] py-10 rounded-lg px-6 border-2 border-grey_400">
      <p className="text-center text-grey_500 text-sm uppercase">
        Welcome Back
      </p>
      <p className="text-center text-lg mt-2 mb-11 text-white">
        Log into your account
      </p>
      <form className="flex flex-col gap-4">
        <Input
          placeholder="Enter your email or username"
          label="Email or username"
          type="text"
          name="email"
        />
        <Input
          placeholder="Enter your password"
          label="Password"
          extraLink={
            <Link className="text-grey_100 font-medium  text-sm" href="#">
              Forgot Password?
            </Link>
          }
          type="password"
          name="password"
          endIcon={<span>👁️</span>}
        />
        <Button block text="Login now" />
        <Link href="#" className=" text-grey_300 text-sm font-medium ">
          Not registered yet? <span className=" text-white">Register →</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
