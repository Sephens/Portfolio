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
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />I am an Undergraduate holding a Bachelors Degree in Information Technology from Kibabii University, Bungoma Kenya.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
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
            "The Constituent elements of the world are order and chaos" {" "}
          </p>
          <footer className="blockquote-footer">Steven</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
