import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst",
          "Python Developer",
          "AWS Certified Cloud Practioner",
          "Cloud Engineer",
          "Machine Learning",
          "IT Technical Support Specialist",
          "Cyber Security Analyst"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

