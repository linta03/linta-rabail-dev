import React from "react";
import { Spotlight } from "@/components/HomePage/SpotLight";
import AnimatedShinyText from "../ui/ShinyBtn";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import WidthWrapper from "../ui/WidthWrapper";

const Hero = () => {
  return (
    <>
      <main className="text-white min-h-[500px] flex justify-center items-center w-full relative">
        <div className="absolute  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Spotlight fill="white" className="absolute left-0 top-0" />
     

        <WidthWrapper>
          <div className="w-[65%] flex flex-col justify-center items-center pt-28">
            <h1 className="text-7xl font-bold uppercase dark:text-white text-black text-center  z-[999]">
              I&apos;m <br /> Linta Rabail <br />
              <span className="hero_gradient_text ">
                {" "}
                Web Application Developer
              </span>
            </h1>
            <div className="absolute top-[27%] left-[26%] -rotate-[34deg] dark:bg-white/20 backdrop-blur-sm bg-black dark:text-white rounded-full text-white border border-black z-[999] px-2 font-medium py-1 text-xs flex gap-1 items-center">
              Modern Web Development <FaCode />
            </div>
            <Link href={"/projects"} className="z-[999] my-6">
              <AnimatedShinyText className="  inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                ✨ View Projects
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
        </WidthWrapper>
      </main>
    </>
  );
};

export default Hero;
