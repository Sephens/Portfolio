import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Hand coding-bro.svg";
import Particle from "../Particle";
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
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 16 }} className="heading">
                Transforming Data into Insights, Code into Solutions, and Clouds into Scalable Power
              </h1>

              <h2  style={{ paddingBottom: 16, fontSize: "1em" }} className="heading2">
              <span className="purple">Data Alchemist - Developer, Machine Learning Engineer & Cloud  </span>
            </h2>
            
              <h2  style={{ paddingBottom: 12, fontSize: "1em" }} className="heading2">
              Welcome <span className="purple"> To </span> My Digital Hub! 
            </h2>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* // Column for the right side of the row (containing an image) */}
            <Col md={6} style={{ paddingBottom: 20}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
