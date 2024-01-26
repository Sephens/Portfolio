import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Data Science",
          "MERN Stack Developer",
          "Open Source Contributor",
          "IT Technical Support Specialist",
          "Cloud Computing"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

