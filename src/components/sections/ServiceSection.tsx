import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/donation.png",
      title: "Effortless Donation",
      description:
        "Experience a seamless donation process with Regift. Our user-friendly platform ensures that your contribution reaches children in need with just a few clicks.",
    },
    {
      id: 1,
      iconUrl: "/images/verifiedOrganisation.png",
      title: "Verified Organizations",
      description:
        "Rest easy knowing that your donations are channeled through trusted and verified organizations. We rigorously vet and approve organizations to maintain the highest standards.",
    },
    {
      id: 2,
      iconUrl: "/images/transTracking.png",
      title: "Transparent Tracking",
      description:
        "Stay informed about the journey of your donations. Regift provides transparent tracking, allowing you to follow the progress of your items from donation to delivery.",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
