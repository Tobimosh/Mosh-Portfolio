"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-12">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
      
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Clients;
