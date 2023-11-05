import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="bg-bg_dark_light w-[463px] py-10 rounded-lg px-6 border-2 border-grey_400">
      <p className="text-center text-grey_500 text-sm uppercase">Sign Up</p>
      <p className="text-center text-lg mt-2 mb-11 text-white">
        Create an account to continue
      </p>
      <form className="flex flex-col gap-4">
        <Input
          placeholder="Enter your email"
          label="Email"
          type="text"
          name="email"
        />
        <Input
          placeholder="Enter username"
          label="Username"
          type="text"
          name="Username"
        />
        <Input
          placeholder="Choose a strong password"
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
        <Button block text="Continue" />
        <Link href="#" className=" text-grey_300 text-sm font-medium ">
          Already have an account? <span className=" text-white">Login →</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
