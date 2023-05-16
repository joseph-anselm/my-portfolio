import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  SiHtml5,
  SiMysql,
  SiJavascript,
  SiReact,
  SiDjango,
  SiAws,
  SiPhp,
  SiWordpress,
} from "react-icons/si";

export default function Techstacks() {
  const skillSet = [
    { name: "HTML/CSS", percentage: 95, icon: SiHtml5 },
    { name: "Mysql / Postgres", percentage: 85, icon: SiMysql },
    { name: "JavaScript", percentage: 85, icon: SiJavascript },
    { name: "React", percentage: 80, icon: SiReact },
    { name: "Django", percentage: 80, icon: SiDjango },
    { name: "AWS/Azure", percentage: 80, icon: SiAws },
    { name: "PHP", percentage: 80, icon: SiPhp },
    { name: "CMS / Headless CMS", percentage: 85, icon: SiWordpress },
  ];

  return (
    <div className="max-w-screen-lg mx-auto pb-10">
      <div className="text-center max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold my-5">Tech Stacks</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {skillSet.map((skill) => (
          <div key={skill.name}>
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: `#2E82FD`,
                textColor: "#2E82FD",
                trailColor: "#D1D5DB",
                pathTransitionDuration: 0.3, // Control the transition duration on hover
                trailColor: "#D1D5DB",
                backgroundColor: "#0B5ED7", // Set the deeper blue color for hover
              })}
              strokeWidth={10}
              className="w-24"
            >
              <div className="flex justify-center">
                {React.createElement(skill.icon, { size: 30, color: "#2E82FD" })}
              </div>
            </CircularProgressbar>
            <p className="mt-4 text-xl font-semibold text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
