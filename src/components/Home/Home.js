import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Hand coding-bro.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


// Functional component definition
export default function Home() {
  return (
    <section>

      {/* Container for the home section with a custom class and id */}
      <Container fluid className="home-section" id="home">
        {/* Custom Particle component for adding particle animation in the background */}
        <Particle />

        {/* Container for the content inside the home section */}
        <Container className="home-content">
          <Row>
            {/* // Column for the left side of the row (containing text content) */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hello{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <strong className="main-name purple"> STEVE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* // Column for the right side of the row (containing an image) */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
