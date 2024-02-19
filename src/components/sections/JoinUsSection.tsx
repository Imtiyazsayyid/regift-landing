import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";
import JoinUsCard from "../cards/JoinUsCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/heart.png",
      title: "Are You A Donor?",
      description: "Make sure your donation goes to the correct individuals who truly require it.",
      link: "https://regift-user.vercel.app/auth/register",
      userType: "Donor",
    },
    {
      id: 1,
      iconUrl: "/images/charity.png",
      title: "Are You A Charitable Organisation?",
      description: "Find the items you really need with assured quality.",
      link: "https://regift-organisation.vercel.app/auth/register",
      userType: "Organisation",
    },
  ];
  return (
    <section className="p-32 pt-48">
      <Header title="Join Us" subtitle="Be A Part of ReGift" />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <JoinUsCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
            link={service.link}
            userType={service.userType}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
