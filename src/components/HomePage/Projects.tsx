import React from "react";
import WidthWrapper from "../ui/WidthWrapper";
import { FaStarOfLife } from "react-icons/fa6";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <WidthWrapper>
      <section className="min-h-[1000px]">
        <div className="w-full flex justify-center items-center py-16">
          <div>
            <FaStarOfLife />
          </div>
          <h2 className="text-5xl font-bold p-2 uppercase border-b-4 border-t-0 border-r-0 border-l-0  border-gray-400">
            Projects <span className="hero_gradient_text">Showcase</span>
          </h2>
        </div>
        <div>
            <ProjectCard/>
        </div>
      </section>
    </WidthWrapper>
  );
};

export default Projects;
