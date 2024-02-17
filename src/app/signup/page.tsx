// Signup.tsx
"use client";

import React, { useState } from "react";
import Header from "../../components/common/Header";
import { Input } from "../../components/ui/input";
import MainButton from "../../components/common/MainButton";
import Dropdown from "../../components/common/DropDown";

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const [userType, setUserType] = useState("user");

  const handleUserTypeChange = (selectedType: string) => {
    setUserType(selectedType);
  };

  return (
    <section className="mt-[9rem]">
      <Header title="Sign Up" subtitle="Create Your Account" />
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-[3.31rem]">
        <div>
          <img
            src="/images/signup_illustration.png"
            alt="signup illustration"
            className="w-[10rem] md:w-full"
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold">
            Join Regift and start making a positive impact today. Create your account below:
          </p>

          <Dropdown
            label="Sign Up As"
            options={[
              { value: "user", label: "Individual User" },
              { value: "organization", label: "Organization" },
            ]}
            selectedOption={userType}
            onChange={handleUserTypeChange}
            className="mb-4 rounded-md"
          />

          <Input
            type="text"
            placeholder="Your Full Name..."
            className="h-[3.8125rem] rounded-md contact-box-shadow mb-4"
          />
          <Input
            type="email"
            placeholder="Your E-mail Address..."
            className="h-[3.8125rem] rounded-md contact-box-shadow mb-4"
          />
          <Input
            type="password"
            placeholder="Create Password..."
            className="h-[3.8125rem] rounded-md contact-box-shadow mb-4"
          />

          <div className="mt-[3.12rem]">
            <MainButton text="Sign Up" width="full_width" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
