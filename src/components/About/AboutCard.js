import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Steven Odhiambo </span>
            from <span className="purple"> Kisumu, Kenya.</span>
            <br />
              I reflect a varied personality including ambition, and the qualities of generosity, love and thoughtfulness. I am a well determined, vigorous individual, yet pleasantly calm.

              I encourage fighting for what you desire and believe in, and doing it through God because nothing great comes easy and with him, everything is possible.
              I graduated two years ago with Bachelors Degree in Information Technology and I managed a Second honors (Upper Division), motivated by my love for learning and succeeding as I strive to become an outstanding successful man in today's society. With determined learning and research, driven by my passion for technology, with a definite goal of becoming a professional software and network enginner incorporated with CyberSecurity, I am currently continuing to upskill and grow my knowledge domain in both fields.
            <br />
            <br />
            <span className="purple">
              Apart from coding, some other activities that I love to do
              include!
            </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Networking
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning always
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> ...
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The Constituent elements of the world are order and chaos" An
            orderly code is an orderly mind, meticulously crafting the digital
            symphony of logic and creativity. A chaotic code is a chaotic
            labyrinth, where every twist and turn leads to confusion, obscuring
            the path to clarity and hindering progress at every step.{" "}
          </p>
          <footer className="blockquote-footer">Steven</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
