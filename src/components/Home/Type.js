import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
              "📌 I build intelligent ML models & stunning dashboards (Power BI/Tableau).",
              "📌 I architect scalable AWS cloud solutions & responsive frontend experiences.",
              "📌 I connect networks and data pipelines to drive real-world impact."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

