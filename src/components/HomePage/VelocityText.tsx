import React from "react";
import { VelocityScroll } from "../ui/ScrollVelocity";

const VelocityText = () => {
  return (
    <div>
      <VelocityScroll
        text="LET&apos;s TALK - AND CREATE -"
        default_velocity={5}
        className=" text-center text-4xl font-light tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
};

export default VelocityText;
