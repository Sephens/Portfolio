import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import riseImg from "../../Assets/network.svg"
import Toolstack from "./Toolstack";

export default function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "2px" }}>
          <Col
            md={6}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "2px" }}>
              More than just a Resume <strong className="purple"> - Here’s My Story </strong>
            </h1>
           
          </Col>
           <Aboutcard />
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}
