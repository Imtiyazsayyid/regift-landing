"use client";

import React from "react";
import MainButton from "../common/MainButton";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  link: string;
  userType: string;
}

function ServiceCard({ iconUrl, title, description, link, userType }: IProps) {
  const openLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-grow flex-col gap-2 pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
      <div className="h-32 mb-10">
        <img src={iconUrl} alt="service icon" className="h-full w-full object-cover" />
      </div>
      <p className="text-[2.25rem] font-[700]">{title}</p>
      <p className="text-normal">{description}</p>
      <MainButton text={"Join as " + userType} classes="mt-10" action={openLink} />
    </div>
  );
}

export default ServiceCard;
