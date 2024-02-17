import React from "react";
import Header from "../common/Header";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function ContactSection() {
  return (
    <section className="mt-[9rem]">
      <Header title="Get in Touch" subtitle="Contact Us" />
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-[3.31rem]">
        <div>
          <img
            src="/images/newsletter_large_icon.png"
            alt="large envelop image"
            className="w-[10rem] md:w-full"
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold">
            Have questions or feedback? Reach out to us by filling in the form below. We value your input and look forward to connecting with you.
          </p>

          <Input
            type="text"
            placeholder="Your Name..."
            className="h-[3.8125rem] rounded-[3.0625rem] contact-box-shadow"
          />
          <Input
            type="email"
            placeholder="Your E-mail here..."
            className="h-[3.8125rem] rounded-[3.0625rem] mt-4 contact-box-shadow"
          />
          <Input
            type="text"
            placeholder="Your Message..."
            className="h-[8.125rem] rounded-[3.0625rem] mt-4 contact-box-shadow"
          />
          <div className="mt-[3.12rem]">
            <MainButton text="Send Message" width="full_width" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
