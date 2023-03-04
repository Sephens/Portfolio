import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Steven Odhiambo</span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />I am an Undergraduate holding a Bachelors Degree in Information Technology Second Class honors(Upper Division) from the Kibabii University, Bungoma Kenya.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One of my most productive days is throwing away 600 lines of code."{" "}
          </p>
          <footer className="blockquote-footer">Steven</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
