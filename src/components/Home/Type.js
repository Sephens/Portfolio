import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Network Engineer",
          "Open Source Contributor",
          "IT Technical Support Specialist",
          "Cloud Computing",
          "Cyber Security Analyst"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

