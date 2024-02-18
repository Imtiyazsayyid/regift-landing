import React from "react";
import { Separator } from "../ui/separator";
import { BsGlobe } from "react-icons/bs";

function FooterSection() {
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <div className="flex gap-2">
          <div className="flex gap-1 text-[16px] items-center select-none">
            <BsGlobe className="text-3xl" />
            <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[1.375rem] text-darkBlue">Regift</p>
          </div>
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">&copy; 2022 Regift. All rights reserved.</div>
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
