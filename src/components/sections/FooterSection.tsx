import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <div>
          <img src="/images/footer_logo.png" alt="footer logo" />
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          &copy; 2022 Regift. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#how-it-works" className="text-lightBlue text-[1rem]">How It Works</a>
          <a href="#about" className="text-lightBlue text-[1rem]">About</a>
          <a href="#login" className="text-lightBlue text-[1rem]">Login</a>
        </div>
      </div>
      <Separator />
      <div className="pb-[2.56rem]">
        <p className="text-customGray">
          Regift empowers generosity, seamlessly integrating into any design for an elevated giving experience.
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
