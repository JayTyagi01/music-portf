import React from "react";

import TestimonialCarousel from "./TestimonialCarousel";
import { testimonialData } from "../../data";

const Testimonial = () => {
  const { title, subtitle, slider } = testimonialData;
  return (
    <section className="bg-testimonial bg-cover bg-no-repeat relative top-[240px] lg:top-[290px] h-[1000px] pt-[60px] md:pt-[120px]">
      <div className="container mx-auto">
        <div className="text-center capitalize flex flex-col items-center">
          <h2 className="h2 text-white">
            "What <strong className="purple">Clients</strong> say"{" "}
          </h2>
          <p className="text-white capitalize mb-8">{subtitle}</p>
        </div>
        <div className="flex justify-center items-center">
          <TestimonialCarousel slider={slider} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
