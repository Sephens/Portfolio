import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "AWS Certified Cloud Practioner",
          "Network Engineer",
          "Open Source Contributor",
          "IT Technical Support Specialist",
          "Cyber Security Analyst"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

