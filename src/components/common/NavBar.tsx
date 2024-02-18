"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import { BsGlobe } from "react-icons/bs";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navigateToSignUp = () => {
    router.push("/signup"); // Navigate to SignUpPage
    setMenu(false); // Close the menu after navigation
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between md:mx-[9rem] items-center">
          <div className="flex items-center gap-2">
            <BsGlobe className="text-5xl" />
            <p className="font-[850] md:leading-[5.0625rem] text-md md:text-[2.375rem] text-darkBlue">Regift</p>
          </div>
          {/* <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>Home</p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>
              About Us
            </p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>Our App</p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>
              Contacts
            </p>
          </div> */}
          {/* <div className="flex items-center gap-[40px] select-none">
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>Login</p>
            <MainButton text="Sign up" classes="shadow-none" onClick={navigateToSignUp} />
          </div> */}
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-1 text-[16px] items-center select-none">
            <BsGlobe className="text-3xl" />
            <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[1.375rem] text-darkBlue">Regift</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
