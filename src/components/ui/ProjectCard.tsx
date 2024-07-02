import React from "react";
import project from "../../../public/images/project.jpg";
import { PinContainer } from "./ThreeDPinCard";
import { projectsData } from "@/lib/data";
import WidthWrapper from "./WidthWrapper";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import html from "../../../public/images/htmll.png";

const ProjectCard = () => {
  return (
    <WidthWrapper>
      <div className="flex gap-12 flex-wrap justify-center items-center m-8 xl:m-2 2xl:m-0">
        {projectsData.map((item, ind) => (
          <div
            className="h-[550px] flex items-center justify-center sm:w-96 w-[80vw]"
            key={ind}
          >
            <PinContainer title={item?.title} href={item?.href}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[300px] mb-2">
                {/* <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src={project} alt="bgimg"/>
                </div> */}
                <Image
                  src={project}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-md"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-base lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconsList.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={`/../public/images/htmll.png`}
                        alt="icon5"
                        className="p-2"
                        width={60}
                        height={60}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </WidthWrapper>
  );
};

export default ProjectCard;
