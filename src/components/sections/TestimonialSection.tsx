import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "/images/rayhan.jpg",
      reviewerName: "Rayhan Curran",
      review:
        "Experience the brilliance of Regift's platform with a visually stunning and retina-ready site. Our contributions look even more impactful on devices with retina display support.",
    },

    {
      id: 1,
      imageUrl: "/images/kayley.jpg",
      reviewerName: "Kayley Frame",
      review:
        "As a business focused on making a difference, we sought a sleek and minimalist design for our website. Regift's user-friendly interface exceeded our expectations.",
    },
    {
      id: 2,
      imageUrl: "/images/gene.jpg",
      reviewerName: "Gene Whitfield",
      review: "I transformed my giving experience in just one day with Regift. The platform is user-friendly, efficient, and my contributions were ready to make a positive impact.",
    },
    {
      id: 3,
      imageUrl: "/images/alan.jpg",
      reviewerName: "Allan Kim",
      review:
        "The true strength of Regift lies in its diverse samples. These samples have been instrumental in conveying our mission and engaging our community effectively.",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="testimonials" subtitle="What Clients say about us" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
