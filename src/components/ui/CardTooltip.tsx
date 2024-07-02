"use client";
import React from "react";
import { AnimatedTooltip } from "./Tooltip";
import html from "../../../public/images/htmll.png";
import css from "../../../public/images/csss.png";
import js from "../../../public/images/javascript.png";
import react from "../../../public/images/reactjs.png";
import next from "../../../public/images/nextjs.png";
import tailwind from "../../../public/images/tailwindcss.png";
import shadcn from "../../../public/images/shadcnui.png";

const people = [
  {
    id: 1,
    name: "Html",
    designation: "Software Engineer",
    image: html,
  },
  {
    id: 2,
    name: "CSS",
    designation: "Product Manager",
    image: css,
  },
  {
    id: 3,
    name: "Javascript",
    designation: "Product Manager",
    image: js,
  },
  {
    id: 4,
    name: "React",
    designation: "Product Manager",
    image: react,
  },
  {
    id: 5,
    name: "Next.js",
    designation: "Product Manager",
    image: next,
  },
  {
    id: 6,
    name: "Shadcn ui",
    designation: "Product Manager",
    image: shadcn,
  },
  {
    id: 7,
    name: "Tailwind css",
    designation: "Product Manager",
    image: tailwind,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row  mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
