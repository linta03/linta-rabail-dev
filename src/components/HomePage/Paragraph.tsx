"use client";
import React from "react";
import WidthWrapper from "../ui/WidthWrapper";
import { Typewriter } from "react-simple-typewriter";

const Paragraph = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 min-h-[400px] w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
      </div>

      <WidthWrapper>
        <div className="flex py-16 flex-col lg:flex-row  gap-4 items-center">
          <div
            id="points"
            className="w-[90%] md:w-[50%] text-base  flex flex-col gap-2 md:px-8"
          >
            <div className="flex items-center gap-2 num_span">
              <span className="bg-purple-50 text-purple-500 p-4 flex justify-center items-center rounded-full w-10 h-10  text-base font-bold">
                01
              </span>
              <span className="text-base capitalize md:text-lg text-[#4D4D4D] ">
                Your vision, My code, Powerful web app
              </span>
            </div>
            <div className="flex items-center gap-2 num_span">
              <span className="bg-yellow-50 text-yellow-500 p-4 flex justify-center items-center rounded-full w-10 h-10  text-lg font-bold">
                02
              </span>
              <span className="text-base md:text-lg text-[#4D4D4D] capitalize">
                Design, development, and deployment
              </span>
            </div>
            <div className="flex items-center gap-2 num_span">
              <span className="bg-green-50 text-green-400 p-4 flex justify-center items-center rounded-full w-10 h-10  text-lg font-bold">
                03
              </span>
              <span className="text-base md:text-lg text-[#4D4D4D] capitalize">
                Pixel Perfect and simple
              </span>
            </div>
            <div className="flex items-center gap-2 num_span">
              <span className="bg-pink-50 text-pink-400 p-4 flex justify-center items-center rounded-full w-10 h-10 text-lg font-bold">
                04
              </span>
              <span className="text-base md:text-lg text-[#4D4D4D] capitalize">
                Simplifying the Complex Web Apps.
              </span>
            </div>
            <div className="flex items-center gap-2 num_span">
              <span className="bg-orange-50 text-orange-400 p-4 flex justify-center items-center rounded-full w-10 h-10 text-lg font-bold">
                05
              </span>
              <span className="text-base md:text-lg text-[#4D4D4D] capitalize">
                Clean Code, Powerful Results.
              </span>
            </div>
          </div>
          <div className="w-[95%] lg:w-[50%] md:pl-8">
            <div className="p-2 md:p-8 rounded-md bg-white/10 backdrop-blur-sm">
              <div className="min-h-full w-full bg-black/60  shadow-sm p-2 md:p-4 rounded-md border-gray-400 text-wrap ">
                <div>
                  <div className="flex items-center gap-1 pb-4 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-[#EB6156] "></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  </div>
                </div>
                <div className="code-editor !font-poppins " id="codeEditor">
                  <pre>
                    <span className="focus:outline-none comment text-wrap !text-gray-500 ">
                      {"//"} WEB APPLICATION DEVELOPER
                    </span>{" "}
                    <br />
                    <span className="focus:outline-none comment text-wrap !text-gray-500 ">
                      {"//"} TAKE YOUR WEBSITE TO THE NEXT LEVEL
                    </span>
                    <br />
                    <br />
                    <span className="keyword text-pink-700">const </span>
                    <span className="variable text-green-400">aboutMe</span>
                    <span className="bracket  text-yellow-500">{" = "}</span>
                    <span className="bracket  text-yellow-500">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="property text-blue-400 ">name</span>
                    <span className="bracket  text-yellow-500">{": "}</span>
                    <span className="string text-red-300  focus:outline-none">
                      &quot;Linta Rabail&quot;
                    </span>
                    <span className="bracket text-yellow-500">{", "}</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="property text-blue-400 focus:outline-none">
                      level
                    </span>
                    <span className="bracket text-yellow-500">{": "}</span>
                    <span className="string text-red-300 focus:outline-none">
                      &quot;Mern Stack Developer&quot;
                    </span>
                    <span className="bracket text-yellow-500">{", "}</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="property text-blue-400">skills</span>
                    <span className="bracket text-yellow-500">{": "}</span>
                    <span className="string text-red-300">
                      {" "}
                      <Typewriter
                        words={[
                          "Html",
                          "Css",
                          "Javascript",
                          "Bootstrap",
                          "Git & Github",
                          "React",
                          "Next.js",
                        ]}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                      />
                    </span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="property text-blue-400">Experience</span>
                    <span className="bracket text-yellow-500">{": "}</span>
                    <span className="string text-red-300">
                      &quot;2 Years&quot;
                    </span>
                    <br />
                    <span className="bracket text-yellow-500">{"};"}</span>
                    <br />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default Paragraph;
